'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Plus, 
  Image as ImageIcon, 
  Trash2, 
  Megaphone, 
  LayoutGrid, 
  LogOut, 
  Upload, 
  Loader2,
  CheckCircle2,
  AlertCircle,
  Pencil,
  X,
  Mail,
  User,
  Phone,
  MessageSquare,
  ShieldCheck,
  UserPlus,
  Key,
  Eye,
  EyeOff
} from 'lucide-react'
import { createClient } from '@/utils/supabase/client'
import { useRouter } from 'next/navigation'

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<'projects' | 'announcements' | 'messages' | 'users'>('projects')
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)
  const [items, setItems] = useState<any[]>([])
  const [editingItem, setEditingItem] = useState<any>(null)
  const [userRole, setUserRole] = useState<'admin' | 'staff' | null>(null)
  
  // Delete Confirmation State
  const [deleteConfirmation, setDeleteConfirmation] = useState<{
    isOpen: boolean;
    itemId: string;
    imageUrl?: string;
    imageUrls?: string[];
  }>({ isOpen: false, itemId: '' })
  
  const supabase = createClient()
  const router = useRouter()

  // Form States
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [files, setFiles] = useState<File[]>([])
  const [existingImageUrls, setExistingImageUrls] = useState<string[]>([])
  const [isUrgent, setIsUrgent] = useState(false)

  // User Management Form States
  /* 
  const [newUserEmail, setNewUserEmail] = useState('')
  const [newUserPassword, setNewUserPassword] = useState('')
  const [showNewUserPassword, setShowNewUserPassword] = useState(false)
  const [newUserFullName, setNewUserFullName] = useState('')
  const [newUserRole, setNewUserRole] = useState<'admin' | 'staff'>('staff')
  */

  useEffect(() => {
    checkUser()
  }, [])

  useEffect(() => {
    if (userRole) {
      fetchItems()
    }
  }, [activeTab, userRole])

  async function checkUser() {
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) {
      router.push('/login')
      return
    }

    // EMERGENCY OVERRIDE for the owner
    if (user.email === 'dirdcplc@gmail.com') {
      setUserRole('admin')
      return
    }

    // Fetch user profile from DB
    const { data: profile, error: profileError } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', user.id)
      .maybeSingle()
    
    if (profileError) {
      console.error("Error fetching profile:", profileError)
      setUserRole(user.user_metadata?.role || 'staff')
    } else if (profile) {
      setUserRole(profile.role)
    } else {
      setUserRole(user.user_metadata?.role || 'staff')
    }
  }

  async function fetchItems() {
    /* if (activeTab === 'users' && userRole !== 'admin') {
      setActiveTab('projects')
      return
    } */

    const tableName = activeTab === 'users' ? 'profiles' : activeTab

    const { data, error } = await supabase
      .from(tableName)
      .select('*')
      .order('created_at', { ascending: false })
    
    if (data) {
      // Filter out "ghost" profiles with no email if we are on the users tab
      const filteredData = activeTab === 'users' 
        ? data.filter((p: any) => p.email) 
        : data
      setItems(filteredData)
    }
  }

  async function handleLogout() {
    await supabase.auth.signOut()
    router.push('/login')
  }

  const resetForm = () => {
    setTitle('')
    setDescription('')
    setCategory('')
    setFiles([])
    setExistingImageUrls([])
    setIsUrgent(false)
    setEditingItem(null)
    setMessage(null)
    /* 
    setNewUserEmail('')
    setNewUserPassword('')
    setNewUserFullName('')
    */
  }

  const handleEdit = (item: any) => {
    setEditingItem(item)
    setTitle(item.title)
    setDescription(activeTab === 'projects' ? item.description : item.content)
    setCategory(item.category || '')
    setIsUrgent(item.is_urgent || false)
    setMessage(null)
    setFiles([]) 
    setExistingImageUrls(item.image_urls || (item.image_url ? [item.image_url] : []))
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const removeExistingImage = (urlToRemove: string) => {
    setExistingImageUrls(prev => prev.filter(url => url !== urlToRemove))
  }

  const removeNewFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    
    /* if (activeTab === 'users') {
      handleCreateUser()
      return
    } */

    if (!editingItem && files.length === 0) {
      setMessage({ type: 'error', text: 'Please select at least one image' })
      return
    }

    if (editingItem && activeTab === 'projects' && existingImageUrls.length === 0 && files.length === 0) {
      setMessage({ type: 'error', text: 'Project must have at least one image' })
      return
    }

    setIsLoading(true)
    setMessage(null)

    try {
      let finalImageUrl = ''
      let finalImageUrls: string[] = [...existingImageUrls]

      // Upload new files
      if (files.length > 0) {
        for (const file of files) {
          const fileExt = file.name.split('.').pop()
          const fileName = `${Math.random()}.${fileExt}`
          const filePath = `${fileName}`

          const { error: uploadError } = await supabase.storage
            .from(activeTab)
            .upload(filePath, file)

          if (uploadError) throw uploadError

          const { data: { publicUrl } } = supabase.storage
            .from(activeTab)
            .getPublicUrl(filePath)
          
          finalImageUrls.push(publicUrl)
        }
      }

      // If we are editing and images were removed, we should ideally delete them from storage.
      // For now, we'll just update the DB. Granular storage cleanup is complex without a tracker.
      
      finalImageUrl = finalImageUrls[0] || ''

      const rowData = activeTab === 'projects' 
        ? { title, description, category, image_url: finalImageUrl, image_urls: finalImageUrls }
        : { title, content: description, image_url: finalImageUrl, is_urgent: isUrgent }

      if (editingItem) {
        const { error: dbError } = await supabase
          .from(activeTab)
          .update(rowData)
          .eq('id', editingItem.id)

        if (dbError) throw dbError
        setMessage({ type: 'success', text: 'Updated successfully!' })
      } else {
        const { error: dbError } = await supabase
          .from(activeTab)
          .insert([rowData])

        if (dbError) throw dbError
        setMessage({ type: 'success', text: 'Added successfully!' })
      }

      resetForm()
      fetchItems()

    } catch (error: any) {
      setMessage({ type: 'error', text: error.message })
    } finally {
      setIsLoading(false)
    }
  }

  /* async function handleCreateUser() {
    setIsLoading(true)
    setMessage(null)

    try {
      const { data, error } = await supabase.auth.signUp({
        email: newUserEmail,
        password: newUserPassword,
        options: {
          data: {
            role: newUserRole,
            full_name: newUserFullName
          }
        }
      })

      if (error) throw error

      setMessage({ type: 'success', text: `Registration email sent to ${newUserEmail}. Staff member will appear in the list once they confirm their email.` })
      resetForm()
      fetchItems()
    } catch (error: any) {
      setMessage({ type: 'error', text: error.message })
    } finally {
      setIsLoading(false)
    }
  } */

  async function executeDelete() {
    setIsLoading(true)
    try {
      const { itemId, imageUrl, imageUrls } = deleteConfirmation
      const tableName = activeTab === 'users' ? 'profiles' : activeTab

      // Delete all images if it's a project
      const urlsToDelete = imageUrls && imageUrls.length > 0 ? imageUrls : imageUrl ? [imageUrl] : []
      
      for (const url of urlsToDelete) {
        const path = url.split('/').pop()
        if (path) {
          await supabase.storage.from(activeTab).remove([path])
        }
      }

      const { error: dbError } = await supabase
        .from(tableName)
        .delete()
        .eq('id', itemId)

      if (dbError) throw dbError

      fetchItems()
      setMessage({ type: 'success', text: 'Item deleted successfully' })
      if (editingItem?.id === itemId) resetForm()
    } catch (error: any) {
      setMessage({ type: 'error', text: error.message })
    } finally {
      setIsLoading(false)
      setDeleteConfirmation({ isOpen: false, itemId: '' })
    }
  }

  const handleDeleteClick = (id: string, imageUrl?: string, imageUrls?: string[]) => {
    setDeleteConfirmation({
      isOpen: true,
      itemId: id,
      imageUrl,
      imageUrls
    })
  }


  if (!userRole) return <div className="h-screen flex items-center justify-center bg-stone-50"><Loader2 className="w-8 h-8 animate-spin text-amber-600" /></div>

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans">
      {/* Navbar */}
      <nav className="bg-white border-b border-stone-200 px-6 py-4 flex items-center justify-between sticky top-0 z-30">
        <div className="flex items-center gap-3">
          <div className="bg-amber-600 p-2 rounded-lg text-white">
            <LayoutGrid className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight">Dir Admin Panel</h1>
            <p className="text-[10px] text-stone-400 font-bold uppercase tracking-widest -mt-1">
              Logged in as: <span className={userRole === 'admin' ? 'text-amber-600' : 'text-stone-600'}>{userRole}</span>
            </p>
          </div>
        </div>
        <button 
          onClick={handleLogout}
          className="flex items-center gap-2 text-stone-500 hover:text-red-600 transition-colors font-medium text-sm"
        >
          <LogOut className="w-4 h-4" />
          Logout
        </button>
      </nav>

      <main className="max-w-6xl mx-auto p-6 lg:p-10">
        
        {/* Tab Switcher */}
        <div className="flex flex-wrap gap-2 p-1 bg-stone-200/50 rounded-2xl w-fit mb-10">
          <button
            onClick={() => { setActiveTab('projects'); resetForm(); }}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
              activeTab === 'projects' ? 'bg-white text-amber-600 shadow-sm' : 'text-stone-500 hover:text-stone-700'
            }`}
          >
            <LayoutGrid className="w-4 h-4" />
            Projects
          </button>
          <button
            onClick={() => { setActiveTab('announcements'); resetForm(); }}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
              activeTab === 'announcements' ? 'bg-white text-amber-600 shadow-sm' : 'text-stone-500 hover:text-stone-700'
            }`}
          >
            <Megaphone className="w-4 h-4" />
            Announcements
          </button>
          <button
            onClick={() => { setActiveTab('messages'); resetForm(); }}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
              activeTab === 'messages' ? 'bg-white text-amber-600 shadow-sm' : 'text-stone-500 hover:text-stone-700'
            }`}
          >
            <Mail className="w-4 h-4" />
            Messages
          </button>
          {/* {userRole === 'admin' && (
            <button
              onClick={() => { setActiveTab('users'); resetForm(); }}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
                activeTab === 'users' ? 'bg-white text-amber-600 shadow-sm' : 'text-stone-500 hover:text-stone-700'
              }`}
            >
              <ShieldCheck className="w-4 h-4" />
              Users
            </button>
          )} */}
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          
          {/* Form Section */}
          {(activeTab === 'projects' || activeTab === 'announcements' || activeTab === 'users') && (
            <section className="lg:col-span-1">
              <div className="bg-white rounded-3xl p-8 border border-stone-200 shadow-sm sticky top-28">
                <h2 className="text-xl font-bold flex items-center gap-2 mb-6">
                  {editingItem ? <Pencil className="w-5 h-5 text-amber-600" /> : <Plus className="w-5 h-5 text-amber-600" />}
                  {editingItem ? 'Edit Item' : `Add ${activeTab === 'projects' ? 'Project' : 'News'}`}
                </h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-bold text-stone-700 mb-2 text-left">Title</label>
                    <input
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 outline-none focus:border-amber-600 transition-all"
                    />
                  </div>

                  {activeTab === 'projects' && (
                    <div>
                      <label className="block text-sm font-bold text-stone-700 mb-2 text-left">Category</label>
                      <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-stone-200 outline-none focus:border-amber-600 transition-all bg-white"
                      >
                        <option value="">Select Category</option>
                        <option value="Residential">Residential</option>
                        <option value="Commercial">Commercial</option>
                        <option value="Industrial">Industrial</option>
                        <option value="Interior">Interior</option>
                      </select>
                    </div>
                  )}

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="block text-sm font-bold text-stone-700 text-left">Description/Content</label>
                      <span className={`text-[10px] font-bold ${description.length > 500 ? 'text-amber-600' : 'text-stone-400'}`}>
                        {description.length} characters
                      </span>
                    </div>
                    <textarea
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      required
                      rows={8}
                      placeholder="Enter a detailed professional description..."
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 outline-none focus:border-amber-600 transition-all resize-none text-sm leading-relaxed"
                    />
                  </div>

                  {activeTab === 'announcements' && (
                    <div className="flex items-center gap-2 bg-amber-50 p-4 rounded-xl border border-amber-100">
                      <input
                        type="checkbox"
                        checked={isUrgent}
                        onChange={(e) => setIsUrgent(e.target.checked)}
                        className="w-4 h-4 accent-amber-600"
                      />
                      <label className="text-xs font-bold text-amber-900">Urgent Notice</label>
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-bold text-stone-700 mb-2 text-left">
                      {(activeTab === 'projects' || activeTab === 'announcements') ? 'Images' : 'Image'}
                    </label>
                    
                    {/* Previews Section */}
                    {(activeTab === 'projects' || activeTab === 'announcements') && (existingImageUrls.length > 0 || files.length > 0) && (
                      <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 mb-4">
                        {/* Existing Images */}
                        {existingImageUrls.map((url, idx) => (
                          <div key={`existing-${idx}`} className="relative group aspect-square rounded-xl overflow-hidden bg-stone-100 border border-stone-200">
                            <img src={url} alt="Existing" className="w-full h-full object-cover" />
                            <button 
                              type="button"
                              onClick={() => removeExistingImage(url)}
                              className="absolute top-1 right-1 p-1 bg-red-500 text-white rounded-full transition-opacity shadow-lg"
                            >
                              <X className="w-3 h-3" />
                            </button>
                            <div className="absolute bottom-0 left-0 right-0 bg-black/40 text-[8px] text-white py-0.5 text-center">Saved</div>
                          </div>
                        ))}
                        
                        {/* New Files */}
                        {files.map((file, idx) => (
                          <div key={`new-${idx}`} className="relative group aspect-square rounded-xl overflow-hidden bg-amber-50 border border-amber-200">
                            <img 
                              src={URL.createObjectURL(file)} 
                              alt="New" 
                              className="w-full h-full object-cover"
                              onLoad={(e) => URL.revokeObjectURL((e.target as any).src)} 
                            />
                            <button 
                              type="button"
                              onClick={() => removeNewFile(idx)}
                              className="absolute top-1 right-1 p-1 bg-red-500 text-white rounded-full transition-opacity shadow-lg"
                            >
                              <X className="w-3 h-3" />
                            </button>
                            <div className="absolute bottom-0 left-0 right-0 bg-amber-500/80 text-[8px] text-white py-0.5 text-center font-bold">New</div>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="relative border-2 border-dashed rounded-xl p-6 text-center hover:border-amber-500 transition-colors">
                      <input 
                        type="file" 
                        accept="image/*" 
                        multiple={activeTab === 'projects' || activeTab === 'announcements'}
                        onChange={(e) => {
                          const selectedFiles = Array.from(e.target.files || [])
                          setFiles(prev => [...prev, ...selectedFiles]) // Append instead of replace
                        }} 
                        className="absolute inset-0 opacity-0 cursor-pointer" 
                      />
                      <Upload className="w-8 h-8 text-stone-300 mx-auto mb-2" />
                      <p className="text-xs text-stone-500">
                        {(activeTab === 'projects' || activeTab === 'announcements') ? 'Add more images' : 'Click to upload image'}
                      </p>
                    </div>
                  </div>

                  {message && (
                    <div className={`p-4 rounded-xl flex items-center gap-3 text-sm font-medium ${
                      message.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
                    }`}>
                      {message.type === 'success' ? <CheckCircle2 className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />}
                      {message.text}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 rounded-2xl transition-all flex items-center justify-center gap-2"
                  >
                    {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : editingItem ? 'Update' : 'Publish'}
                  </button>
                </form>
              </div>
            </section>
          )}

          {/* List Section */}
          <section className={`${activeTab === 'messages' ? 'lg:col-span-3' : 'lg:col-span-2'} space-y-6`}>
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold capitalize">
                {activeTab === 'users' ? 'Staff Management' : `Existing ${activeTab}`}
              </h2>
              <span className="text-sm text-stone-400 font-medium">{items.length} Total</span>
            </div>

            <div className="grid gap-4">
              {activeTab === 'messages' ? (
                items.map((msg) => (
                  <motion.div layout key={msg.id} className="bg-white p-6 rounded-3xl border border-stone-200 shadow-sm group hover:border-amber-200 transition-all">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/3 space-y-3">
                        <div className="flex items-center gap-3 text-stone-800">
                          <User className="w-4 h-4 text-amber-600" />
                          <span className="font-bold">{msg.full_name}</span>
                        </div>
                        <div className="flex items-center gap-3 text-stone-500 text-sm">
                          <Mail className="w-4 h-4" />
                          <span className="truncate">{msg.email}</span>
                        </div>
                        {msg.phone && (
                          <div className="flex items-center gap-3 text-stone-500 text-sm">
                            <Phone className="w-4 h-4" />
                            <span>{msg.phone}</span>
                          </div>
                        )}
                        <div className="pt-2">
                          <span className="text-[10px] font-bold uppercase tracking-widest bg-amber-100 text-amber-700 px-3 py-1 rounded-full">
                            {msg.service || 'General Inquiry'}
                          </span>
                        </div>
                      </div>
                      <div className="md:w-2/3 flex flex-col">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-bold text-stone-800 text-lg">{msg.subject || 'No Subject'}</h3>
                          <button onClick={() => handleDeleteClick(msg.id)} className="flex items-center gap-1.5 px-3 py-2 text-stone-500 hover:text-red-600 transition-colors bg-stone-50 rounded-xl border border-stone-100">
                            <Trash2 className="w-4 h-4" />
                            <span className="text-[10px] font-bold uppercase tracking-wider">Delete</span>
                          </button>
                        </div>
                        <div className="bg-stone-50 p-4 rounded-2xl text-stone-600 text-sm leading-relaxed border border-stone-100 flex-grow italic">
                          "{msg.message}"
                        </div>
                        <div className="mt-4 text-[10px] text-stone-400 font-medium">Received: {new Date(msg.created_at).toLocaleString()}</div>
                      </div>
                    </div>
                  </motion.div>
                ))
              ) : (
                items.map((item) => (
                  <motion.div layout key={item.id} className={`bg-white p-4 rounded-2xl border transition-all flex gap-4 group ${editingItem?.id === item.id ? 'border-amber-500 ring-1 ring-amber-500/20' : 'border-stone-200'}`}>
                    <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0 bg-stone-100 relative">
                      {item.image_url ? (
                        <>
                          <img src={item.image_url} alt={item.title} className="w-full h-full object-cover" />
                          {item.image_urls && item.image_urls.length > 1 && (
                            <div className="absolute bottom-1 right-1 bg-black/60 text-white text-[8px] font-bold px-1.5 py-0.5 rounded flex items-center gap-0.5">
                              <ImageIcon className="w-2 h-2" />
                              {item.image_urls.length}
                            </div>
                          )}
                        </>
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-stone-300">
                          <ImageIcon className="w-8 h-8" />
                        </div>
                      )}
                    </div>
                    <div className="flex-grow py-1">
                      <div className="flex items-start justify-between">
                        <div className="flex-grow text-left">
                          {item.category && <span className="text-[10px] font-bold uppercase tracking-widest text-amber-600 mb-1 block">{item.category}</span>}
                          <h3 className="font-bold text-stone-800">{item.title}</h3>
                          <p className="text-sm text-stone-500 line-clamp-2 mt-1">{item.description || item.content}</p>
                        </div>
                        <div className="flex gap-2 ml-4">
                          <button onClick={() => handleEdit(item)} className="flex items-center gap-1.5 px-3 py-2 text-stone-500 hover:text-amber-600 transition-colors bg-stone-50 rounded-xl border border-stone-100">
                            <Pencil className="w-4 h-4" />
                            <span className="text-[10px] font-bold uppercase tracking-wider">Edit</span>
                          </button>
                          <button onClick={() => handleDeleteClick(item.id, item.image_url, item.image_urls)} className="flex items-center gap-1.5 px-3 py-2 text-stone-500 hover:text-red-600 transition-colors bg-stone-50 rounded-xl border border-stone-100">
                            <Trash2 className="w-4 h-4" />
                            <span className="text-[10px] font-bold uppercase tracking-wider">Delete</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
              {items.length === 0 && (
                <div className="text-center py-20 bg-white rounded-3xl border border-stone-200 border-dashed">
                  <p className="text-stone-400 font-medium">No {activeTab} found.</p>
                </div>
              )}
            </div>
          </section>
        </div>
      </main>

      {/* Delete Confirmation Modal */}
      <AnimatePresence>
        {deleteConfirmation.isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setDeleteConfirmation({ isOpen: false, itemId: '' })}
              className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-white rounded-[32px] p-8 md:p-10 max-w-md w-full shadow-2xl border border-stone-100"
            >
              <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center text-red-600 mb-6">
                <Trash2 className="w-8 h-8" />
              </div>
              
              <h2 className="text-2xl font-bold text-stone-900 mb-2">Confirm Deletion</h2>
              <p className="text-stone-500 mb-8 leading-relaxed">
                Are you sure you want to delete this {activeTab === 'projects' ? 'project' : activeTab === 'announcements' ? 'news' : 'message'}? This action cannot be undone.
              </p>

              <div className="flex gap-3">
                <button
                  onClick={() => setDeleteConfirmation({ isOpen: false, itemId: '' })}
                  className="flex-1 px-6 py-4 bg-stone-100 hover:bg-stone-200 text-stone-600 font-bold rounded-2xl transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={executeDelete}
                  disabled={isLoading}
                  className="flex-1 px-6 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-2xl transition-all shadow-lg shadow-red-600/20 flex items-center justify-center gap-2"
                >
                  {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Delete Now'}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
