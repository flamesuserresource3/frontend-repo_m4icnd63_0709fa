import { Wifi, Zap, Shield, Headphones } from 'lucide-react'

const features = [
  {
    icon: Wifi,
    title: 'Jaringan Stabil',
    desc: 'Teknologi fiber dan mesh memastikan koneksi merata ke seluruh ruangan.',
  },
  {
    icon: Zap,
    title: 'Kecepatan Tinggi',
    desc: 'Streaming 4K, video call, dan gaming kompetitif tanpa lag.',
  },
  {
    icon: Shield,
    title: 'Keamanan Kelas Enterprise',
    desc: 'Enkripsi WPA3, kontrol orang tua, dan perlindungan malware.',
  },
  {
    icon: Headphones,
    title: 'Dukungan 24/7',
    desc: 'Tim ahli siap membantu kapan pun Anda membutuhkan.',
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-blue-50" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">Kenapa Memilih HyperNet?</h2>
          <p className="mt-3 text-slate-600">Kami merancang layanan internet untuk kebutuhan modern—cepat, aman, dan andal.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/10 text-blue-700">
                <f.icon size={22} />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{f.desc}</p>
              <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent opacity-0 group-hover:opacity-100 transition" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
