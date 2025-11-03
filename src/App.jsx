import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <section id="faq" className="py-16 border-t border-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <div>
                <h2 className="text-3xl font-extrabold tracking-tight">Pertanyaan Umum</h2>
                <p className="mt-2 text-slate-600 max-w-prose">Informasi singkat untuk membantu Anda memahami layanan kami.</p>
              </div>
              <div className="space-y-6">
                <div className="rounded-xl border border-slate-200 p-5">
                  <h3 className="font-semibold">Apakah ada batasan kuota?</h3>
                  <p className="mt-1 text-slate-600 text-sm">Semua paket bersifat unlimited tanpa FUP yang mengganggu aktivitas harian.</p>
                </div>
                <div className="rounded-xl border border-slate-200 p-5">
                  <h3 className="font-semibold">Berapa lama proses pemasangan?</h3>
                  <p className="mt-1 text-slate-600 text-sm">Tim kami akan menghubungi Anda dan pemasangan biasanya selesai dalam 24 jam.</p>
                </div>
                <div className="rounded-xl border border-slate-200 p-5">
                  <h3 className="font-semibold">Apakah ada garansi perangkat?</h3>
                  <p className="mt-1 text-slate-600 text-sm">Ya, perangkat mendapatkan garansi selama masa berlangganan aktif.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-slate-200 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} HyperNet. All rights reserved.</p>
          <div className="text-sm text-slate-600">Kebijakan Privasi · Syarat & Ketentuan</div>
        </div>
      </footer>
    </div>
  )
}

export default App
