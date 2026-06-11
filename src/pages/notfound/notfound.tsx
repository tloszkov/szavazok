import { Link } from "react-router-dom"
import { AlertCircle, Home } from "lucide-react"

function NotFound() {
  return (
    <div className="container mx-auto max-w-md px-4 py-24 text-center">
      <div className="bg-slate-900/40 border border-slate-800 rounded-3xl p-8 shadow-xl backdrop-blur-sm">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-500 border border-amber-500/20 mx-auto mb-6">
          <AlertCircle className="h-8 w-8" />
        </div>
        <h1 className="text-4xl font-extrabold text-white mb-2">404</h1>
        <h2 className="text-xl font-bold text-slate-200 mb-4">Az oldal nem található</h2>
        <p className="text-sm text-slate-400 leading-relaxed mb-8">
          Sajnáljuk, de a keresett oldal nem létezik vagy átköltözött egy másik címre.
        </p>
        <Link to="/">
          <div className="inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-xl bg-indigo-650 hover:bg-indigo-600 text-white font-semibold transition-all duration-200 hover:scale-[1.02] cursor-pointer">
            <Home className="h-4.5 w-4.5" />
            <span>Vissza a főoldalra</span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default NotFound