import { Target, Heart, Compass, HelpCircle } from "lucide-react"

function About() {
  const cards = [
    {
      title: "Mi a célunk?",
      icon: Target,
      content: "Célunk, hogy a fiataloknak lehetőséget biztosítsunk a tanulásra, növekedésre, és a közösségükre pozitív hatást gyakorló értelmes projektekben való részvételre.",
      color: "from-blue-500/10 to-indigo-500/10 border-blue-500/20 text-blue-400"
    },
    {
      title: "Elkötelezettségünk",
      icon: Heart,
      content: "Szervezetünk elkötelezett a fenntartható fejlődés előmozdítása és a környezet védelme iránt a jövő generációk számára.",
      color: "from-emerald-500/10 to-teal-500/10 border-emerald-500/20 text-emerald-400"
    },
    {
      title: "Terveink",
      icon: Compass,
      content: "Különböző, fiatalokra összpontosító kezdeményezéseket tervezünk megvalósítani, beleértve oktatási programokat, környezetvédelmi projekteket és kulturális csereprogramokat. Emellett részt kívánunk venni az Erasmus+ programban is, amely európai integrációt és együttműködést előmozdít.",
      color: "from-purple-500/10 to-pink-500/10 border-purple-500/20 text-purple-400"
    },
    {
      title: "A weboldal célja",
      icon: HelpCircle,
      content: "Ez a weboldal azért jött létre, hogy a fiatalok információt kapjanak a választásokról és a választások fontosságáról. Célja, hogy oktassa és ösztönözze a fiatalokat a demokratikus folyamatban való részvételre, biztosítva, hogy hangjuk hallható legyen és érdekeik képviselve legyenek.",
      color: "from-amber-500/10 to-orange-500/10 border-amber-500/20 text-amber-400"
    }
  ]

  return (
    <div className="container mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Title Section */}
      <div className="text-center max-w-3xl mx-auto mb-16 animate-in fade-in slide-in-from-top-4 duration-300">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
          Egy Esély a Közösségért Egyesület
        </h1>
        <p className="text-lg text-slate-400 leading-relaxed">
          Támogatjuk, ösztönözzük és felhatalmazzuk a jövő generációit Székelykeresztúron és környékén.
        </p>
        <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-emerald-500 rounded-full mx-auto mt-6"></div>
      </div>

      {/* Grid of Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {cards.map((card, idx) => {
          const Icon = card.icon
          return (
            <div 
              key={idx}
              className={`rounded-2xl border bg-gradient-to-br p-6 shadow-xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl flex flex-col justify-between ${card.color}`}
            >
              <div>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-900">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h2 className="text-xl font-bold text-white">{card.title}</h2>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {card.content}
                </p>
              </div>
            </div>
          )
        })}
      </div>

      {/* Additional Association Info banner */}
      <div className="mt-16 bg-slate-900/40 border border-slate-800/80 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-emerald-500/10 opacity-30 pointer-events-none"></div>
        <h2 className="text-2xl font-bold text-white mb-4 relative z-10">Csatlakozz te is a közösségünkhöz!</h2>
        <p className="text-slate-300 max-w-2xl mx-auto mb-6 relative z-10 leading-relaxed text-sm">
          Ha fiatal vagy, tanulni szeretnél, vagy egyszerűen tenni akarsz a székelykeresztúri közösségért, keress minket az elérhetőségeinken vagy kövesd figyelemmel projektjeinket!
        </p>
        <a 
          href="mailto:office@ospc.ro" 
          className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-500 shadow-lg shadow-indigo-600/30 transition-all duration-200 relative z-10 hover:scale-105"
        >
          Kapcsolatfelvétel
        </a>
      </div>
    </div>
  )
}

export default About
