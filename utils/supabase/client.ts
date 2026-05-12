import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key) {
    // Return a dummy client or handle it according to your needs
    // For build stability, we can return null if we check it in components,
    // but createBrowserClient expects strings.
    // Returning a client with dummy values is often enough to let the build pass
    // if the actual calls are in useEffect or guarded.
    return createBrowserClient(
      url || 'https://placeholder.supabase.co',
      key || 'placeholder'
    )
  }

  return createBrowserClient(url, key)
}
