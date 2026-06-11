import CommunityLogo from "/Community.png"
import FacebookLogo from "/facebook.svg"
import InstagramLogo from "/instagram.svg"
import { Mail, MapPin, ExternalLink } from "lucide-react"

function Footer() {
    return (
        <footer className="w-full bg-slate-950 border-t border-slate-900/60 mt-16">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    {/* Brand/Logo Section */}
                    <div className="space-y-6">
                        <div className="flex items-center space-x-3">
                            <img src={CommunityLogo} width={48} height={48} className="rounded-lg object-contain bg-white p-1" alt="Egy Esély a Közösségért Logo" />
                            <div>
                                <span className="text-sm font-bold text-white tracking-wider block">EGY ESÉLY A KÖZÖSSÉGÉRT</span>
                                <span className="text-xs text-indigo-400">Egyesület</span>
                            </div>
                        </div>
                        <p className="text-sm text-slate-400 max-w-xs leading-relaxed">
                            Elkötelezettek vagyunk a fiatalok oktatása, a demokratikus szerepvállalás ösztönzése és a fenntartható közösségi projektek mellett.
                        </p>
                    </div>

                    {/* Middle Section: Contact Info */}
                    <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 xl:col-span-2 xl:mt-0">
                        <div className="space-y-4">
                            <h3 className="text-sm font-bold text-slate-300 uppercase tracking-wider">Elérhetőségek</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start space-x-3 text-sm text-slate-400">
                                    <MapPin className="h-5 w-5 text-indigo-500 shrink-0 mt-0.5" />
                                    <span>Székelykeresztúr, Hargita megye<br />535400, Románia</span>
                                </li>
                                <li className="flex items-center space-x-3 text-sm text-slate-400">
                                    <Mail className="h-5 w-5 text-indigo-500 shrink-0" />
                                    <a href="mailto:office@ospc.ro" className="hover:text-white transition-colors">office@ospc.ro</a>
                                </li>
                            </ul>
                        </div>

                        {/* Social Links Section */}
                        <div className="space-y-4">
                            <h3 className="text-sm font-bold text-slate-300 uppercase tracking-wider">Közösségi Média</h3>
                            <div className="flex items-center space-x-4">
                                <a 
                                    href="https://www.facebook.com/ospcom" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-xl bg-slate-900 border border-slate-800 hover:bg-indigo-600 hover:border-indigo-500 hover:text-white text-slate-300 transition-all duration-200"
                                >
                                    <img src={FacebookLogo} width={20} height={20} className="filter invert brightness-200" alt="Facebook" />
                                </a>
                                <a 
                                    href="https://www.instagram.com/ospc.egyesulet/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-xl bg-slate-900 border border-slate-800 hover:bg-indigo-600 hover:border-indigo-500 hover:text-white text-slate-300 transition-all duration-200"
                                >
                                    <img src={InstagramLogo} width={20} height={20} className="filter invert brightness-200" alt="Instagram" />
                                </a>
                            </div>
                            <p className="text-xs text-slate-500 flex items-center gap-1">
                                Kövess minket a legfrissebb hírekért <ExternalLink className="h-3 w-3 text-slate-500" />
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-8 border-t border-slate-900/60 pt-8 flex flex-col sm:flex-row items-center justify-between">
                    <p className="text-xs text-slate-500">
                        &copy; {new Date().getFullYear()} Egy Esély a Közösségért Egyesület. Minden jog fenntartva.
                    </p>
                    <p className="text-[10px] text-slate-600 mt-2 sm:mt-0 font-mono">
                        Választási Tájékoztató Rendszer v1.1.0
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer