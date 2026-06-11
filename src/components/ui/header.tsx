import { Link, useLocation } from "react-router-dom"
import { Vote, Info, Home, FileText, Menu, X } from "lucide-react"
import { useState } from "react"

function Header() {
    const location = useLocation()
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    
    const navItems = [
        { path: "/", label: "Főoldal", icon: Home },
        { path: "/voting", label: "Szavazási Kisokos", icon: FileText },
        { path: "/about", label: "Egyesületünkről", icon: Info },
    ]

    return (
        <header className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md">
            <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Brand */}
                <Link to="/" className="flex items-center space-x-3 group">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-emerald-500 text-white shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-200">
                        <Vote className="h-5.5 w-5.5" />
                    </div>
                    <div>
                        <h1 className="text-lg font-bold tracking-tight text-white m-0 p-0 text-left leading-none">
                            SZAVAZOK
                        </h1>
                        <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Székelykeresztúr</span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center space-x-1">
                    {navItems.map((item) => {
                        const Icon = item.icon
                        const isActive = location.pathname === item.path
                        return (
                            <Link key={item.path} to={item.path}>
                                <div
                                    className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 border border-transparent cursor-pointer ${
                                        isActive
                                            ? "bg-indigo-600/10 text-indigo-400 border-indigo-500/20"
                                            : "text-slate-300 hover:bg-slate-900 hover:text-white"
                                    }`}
                                >
                                    <Icon className="h-4 w-4" />
                                    <span>{item.label}</span>
                                </div>
                            </Link>
                        )
                    })}
                </nav>

                {/* Mobile Menu Button */}
                <div className="flex md:hidden">
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="inline-flex items-center justify-center rounded-xl p-2 text-slate-400 hover:bg-slate-900 hover:text-white focus:outline-none w-10 h-10 border-0"
                    >
                        {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden border-b border-slate-800 bg-slate-950 px-4 py-4 space-y-2 animate-in fade-in slide-in-from-top-5 duration-200">
                    {navItems.map((item) => {
                        const Icon = item.icon
                        const isActive = location.pathname === item.path
                        return (
                            <Link 
                                key={item.path} 
                                to={item.path}
                                onClick={() => setMobileMenuOpen(false)}
                                className="block"
                            >
                                <div
                                    className={`flex w-full items-center space-x-3 px-4 py-3 rounded-xl text-base font-medium transition-colors cursor-pointer ${
                                        isActive
                                            ? "bg-indigo-600/10 text-indigo-400"
                                            : "text-slate-300 hover:bg-slate-900 hover:text-white"
                                    }`}
                                >
                                    <Icon className="h-5 w-5" />
                                    <span>{item.label}</span>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            )}
        </header>
    )
}

export default Header