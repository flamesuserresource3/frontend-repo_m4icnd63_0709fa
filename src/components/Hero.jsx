import { Rocket, Star, Shield } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 sm:pt-28">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-white" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
              <Star size={16} /> Internet Cepat & Stabil
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Wujudkan Rumah Pintar dengan Internet Super Kencang
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Nikmati pengalaman streaming, gaming, dan kerja tanpa hambatan. Jangkauan luas, performa stabil, dan biaya terjangkau.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#pricing" className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 hover:bg-blue-700 transition">
                <Rocket size={18} /> Pilih Paket
              </a>
              <a href="#features" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-300 text-slate-700 hover:border-slate-400 hover:bg-slate-50 transition">
                Pelajari Fitur
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-slate-600">
              <div className="flex items-center gap-2">
                <Shield className="text-green-600" size={18} />
                <span>Garansi uptime 99.9%</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="text-green-600" size={18} />
                <span>Dukungan 24/7</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-blue-200/50 rounded-full blur-3xl" />
            <div className="absolute bottom-10 -left-10 w-72 h-72 bg-cyan-200/50 rounded-full blur-3xl" />
            <div className="relative rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
              <div className="p-6 bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500 text-white">
                <div className="text-sm uppercase tracking-widest opacity-80">Kecepatan Hingga</div>
                <div className="mt-1 text-5xl font-extrabold">300 Mbps</div>
                <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                  <div className="bg-white/10 rounded-lg p-3">
                    <div className="text-2xl font-bold">4K</div>
                    <div className="text-xs opacity-80">Streaming</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3">
                    <div className="text-2xl font-bold">Ping 5ms</div>
                    <div className="text-xs opacity-80">Gaming</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3">
                    <div className="text-2xl font-bold">Tanpa Batas</div>
                    <div className="text-xs opacity-80">Kuota</div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6">
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-blue-600" /> Pemasangan cepat dalam 24 jam</li>
                  <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-blue-600" /> Router dual-band gratis</li>
                  <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-blue-600" /> Aplikasi monitoring penggunaan</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
