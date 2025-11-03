import { Wifi, Phone, HelpCircle } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-white/70 border-b border-slate-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-blue-600 text-white">
            <Wifi size={20} />
          </div>
          <span className="font-extrabold tracking-tight text-slate-900 text-lg">HyperNet</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-slate-700">
          <a href="#features" className="hover:text-slate-900 transition-colors">Fitur</a>
          <a href="#pricing" className="hover:text-slate-900 transition-colors">Paket</a>
          <a href="#faq" className="hover:text-slate-900 transition-colors">FAQ</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="tel:0800123456" className="hidden sm:inline-flex items-center gap-2 text-slate-700 hover:text-slate-900">
            <Phone size={18} /> 0800-123-456
          </a>
          <a href="#pricing" className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:shadow-md hover:bg-blue-700 transition">
            <HelpCircle size={18} /> Dapatkan Sekarang
          </a>
        </div>
      </div>
    </header>
  )
}
