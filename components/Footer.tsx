import { Building2, Lock } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-400 py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Building2 className="w-6 h-6 text-amber-500" />
            <span className="text-white font-bold text-xl">
              Dir Design & <span className="text-amber-500">Construction</span>
            </span>
          </div>
          <p className="text-sm">
            Licensed consulting architects, engineering consultants, and general contractors.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/about" className="hover:text-amber-500 transition">About Us</Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-amber-500 transition">Our Projects</Link>
            </li>
            <li>
              <Link href="/#services" className="hover:text-amber-500 transition">Services</Link>
            </li>
            <li>
              <Link href="/#contact" className="hover:text-amber-500 transition">Contact</Link>
            </li>
            <li className="pt-2 border-t border-stone-800 mt-2">
              <Link href="/login" className="flex items-center gap-2 hover:text-amber-500 transition text-xs opacity-60 hover:opacity-100">
                <Lock className="w-3 h-3" />
                Admin Login
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Licenses</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-amber-500 transition">Consulting Architects</li>
            <li className="hover:text-amber-500 transition">Engineering Consultants</li>
            <li className="hover:text-amber-500 transition">General Contractors</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Contact Info</h4>
          <ul className="space-y-2 text-sm">
            <li>Hosanna, Central Ethiopia Regional State, Ethiopia</li>
            <li className="text-amber-500">dirdcplc@gmail.com</li>
            <li>+251 926344361</li>
          </ul>
        </div>
      </div>
      <div className="text-center pt-8 mt-8 border-t border-stone-800 text-sm">
        © {new Date().getFullYear()} Dir Design and Construction PLC. All rights reserved.
      </div>
    </footer>
  );
}
