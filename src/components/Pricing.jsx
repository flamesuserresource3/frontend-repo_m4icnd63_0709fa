import { CheckCircle } from 'lucide-react'

const plans = [
  {
    name: 'Basic 50',
    speed: '50 Mbps',
    price: 'Rp199.000',
    features: ['Router gratis', 'Tanpa batas kuota', 'Ideal 1-4 perangkat'],
    highlight: false,
  },
  {
    name: 'Fast 150',
    speed: '150 Mbps',
    price: 'Rp299.000',
    features: ['Router dual-band', 'Latensi rendah', 'Ideal 5-10 perangkat'],
    highlight: true,
  },
  {
    name: 'Ultra 300',
    speed: '300 Mbps',
    price: 'Rp449.000',
    features: ['Router Wi‑Fi 6', 'Prioritas dukungan', 'Ideal rumah besar & gamer'],
    highlight: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">Pilih Paket Sesuai Kebutuhan</h2>
          <p className="mt-3 text-slate-600">Harga transparan tanpa biaya tersembunyi. Pemasangan cepat dan mudah.</p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-3xl border p-6 bg-white shadow-sm transition hover:shadow-lg ${
                p.highlight ? 'border-blue-600 ring-2 ring-blue-600/20' : 'border-slate-200'
              }`}
            >
              {p.highlight && (
                <div className="absolute -top-3 right-6 px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-semibold shadow">
                  Terlaris
                </div>
              )}
              <div className="flex items-baseline justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{p.name}</h3>
                  <p className="text-slate-600">Kecepatan hingga {p.speed}</p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-extrabold text-slate-900">{p.price}</div>
                  <div className="text-xs text-slate-500">/ bulan</div>
                </div>
              </div>
              <ul className="mt-6 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-slate-700">
                    <CheckCircle className="text-green-600" size={18} /> {f}
                  </li>
                ))}
              </ul>
              <a
                href="#form"
                className={`mt-6 inline-flex w-full items-center justify-center rounded-xl px-4 py-3 font-semibold transition shadow ${
                  p.highlight
                    ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-blue-600/20'
                    : 'bg-slate-900 text-white hover:bg-slate-800'
                }`}
              >
                Berlangganan
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
