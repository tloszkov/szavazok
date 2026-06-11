import { useState } from "react"
import { Clock, FileText, Globe, CheckCircle, Info, Landmark, PhoneCall, CheckSquare } from "lucide-react"

function Voting() {
  const [activeTab, setActiveTab] = useState<"procedure" | "ballots" | "ep">("procedure")

  const steps = [
    {
      title: "Nyitvatartás",
      time: "07:00 - 22:00",
      desc: "A szavazóhelyiségek reggel 7 órakor nyitnak és este 10 órakor zárnak. Ha a záráskor még sorban állsz, 23:59-ig leadhatod a szavazatod.",
      icon: Clock,
      color: "border-indigo-500/30 text-indigo-400"
    },
    {
      title: "Azonosítás",
      time: "Lépés 1",
      desc: "Személyazonosító okmány felmutatása szükséges. Kizárólag abban a szavazókörzetben szavazhatsz, ahová a bejelentett lakcímed vagy a legalább 60 napos ideiglenes lakcímed szól.",
      icon: CheckSquare,
      color: "border-emerald-500/30 text-emerald-400"
    },
    {
      title: "Szavazólapok átvétele",
      time: "Lépés 2",
      desc: "Öt darab szavazólapot kapsz a bizottságtól, valamint a hivatalos pecsétet.",
      icon: FileText,
      color: "border-blue-500/30 text-blue-400"
    },
    {
      title: "Voksolás a fülkében",
      time: "Lépés 3",
      desc: "A fülkében nyomd rá a pecsétet a kiválasztott jelöltekre/listákra. Hajtsd össze a lapokat úgy, hogy a pecsét kívül legyen (hitelesítés), és helyezd őket a megfelelő urnákba.",
      icon: CheckCircle,
      color: "border-purple-500/30 text-purple-400"
    },
    {
      title: "Bélyegző visszaadása",
      time: "Lépés 4",
      desc: "A szavazás befejeztével kötelező visszaadni a pecsétet és aláírni a választási névjegyzéket.",
      icon: Info,
      color: "border-amber-500/30 text-amber-400"
    }
  ]

  const ballots = [
    {
      name: "EP-jelöltlisták",
      desc: "Európai Parlamenti képviselők megválasztása a következő 5 éves ciklusra."
    },
    {
      name: "Polgármesterjelöltek",
      desc: "Székelykeresztúr polgármesterének közvetlen megválasztása."
    },
    {
      name: "Helyi tanácsosi jelöltlisták",
      desc: "A helyi döntéshozó önkormányzati testület (tanács) összeállításának meghatározása."
    },
    {
      name: "Megyeitanácselnök-jelöltek",
      desc: "Hargita megye tanácselnökének közvetlen megválasztása."
    },
    {
      name: "Megyei tanácsosi jelöltlisták",
      desc: "A megyei szintű fejlesztéseket koordináló tanácsosok megválasztása."
    }
  ]

  const epDecisionAreas = [
    { title: "Belső piac és kereskedelem", desc: "Döntések az áruk, szolgáltatások, személyek és tőke szabad mozgásáról, valamint az EU nemzetközi kereskedelmi megállapodásairól." },
    { title: "Környezetvédelem & klímavédelem", desc: "A klímaváltozás elleni küzdelem, fenntartható fejlesztések és energiahatékonysági előírások." },
    { title: "Mezőgazdaság & vidékfejlesztés", desc: "Az EU közös agrárpolitikájának kialakítása, mezőgazdasági és termelői támogatások elosztása." },
    { title: "Szociális és munkajogi kérdések", desc: "A munkavállalói jogok védelme, munkaidő szabályozása és munkavédelmi előírások." },
    { title: "Biztonság és védelem", desc: "Közös terrorizmus elleni küzdelem, határvédelem és a tagállami biztonsági együttműködések megerősítése." },
    { title: "Digitális átállás", desc: "A digitális piacok szabályozása, adatvédelmi törvények (pl. GDPR) és az új technológiák keretrendszere." }
  ]

  return (
    <div className="container mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 animate-in fade-in slide-in-from-top-4 duration-300">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
          Szavazási Tudnivalók
        </h1>
        <p className="text-lg text-slate-400">
          Mindent, amit a helyhatósági és az Európai Parlamenti választások menetéről tudni érdemes.
        </p>
        <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-emerald-500 rounded-full mx-auto mt-6"></div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex justify-center mb-10">
        <div className="inline-flex rounded-xl bg-slate-900/60 border border-slate-800 p-1 backdrop-blur-sm">
          <button
            onClick={() => setActiveTab("procedure")}
            className={`flex items-center space-x-2 px-4 sm:px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 w-auto border-0 ${
              activeTab === "procedure"
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/20"
                : "text-slate-400 hover:text-white bg-transparent"
            }`}
          >
            <Clock className="h-4 w-4" />
            <span>Szavazás Menete</span>
          </button>
          <button
            onClick={() => setActiveTab("ballots")}
            className={`flex items-center space-x-2 px-4 sm:px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 w-auto border-0 ${
              activeTab === "ballots"
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/20"
                : "text-slate-400 hover:text-white bg-transparent"
            }`}
          >
            <FileText className="h-4 w-4" />
            <span>Az 5 Szavazólap</span>
          </button>
          <button
            onClick={() => setActiveTab("ep")}
            className={`flex items-center space-x-2 px-4 sm:px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 w-auto border-0 ${
              activeTab === "ep"
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/20"
                : "text-slate-400 hover:text-white bg-transparent"
            }`}
          >
            <Globe className="h-4 w-4" />
            <span>EP Képviselet</span>
          </button>
        </div>
      </div>

      {/* Tab Contents */}
      <div className="transition-all duration-300">
        {/* TAB 1: PROCEDURE */}
        {activeTab === "procedure" && (
          <div className="space-y-10 animate-in fade-in duration-300">
            {/* Timeline */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {steps.map((step, idx) => {
                const Icon = step.icon
                return (
                  <div key={idx} className="relative bg-slate-900/40 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-755 transition-colors">
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-wider text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded-full">{step.time}</span>
                      <h3 className="text-lg font-bold text-white mt-4 mb-2">{step.title}</h3>
                      <p className="text-xs text-slate-450 leading-relaxed">{step.desc}</p>
                    </div>
                    <div className="mt-6 flex justify-end">
                      <div className="p-2 bg-slate-950 rounded-lg border border-slate-800">
                        <Icon className="h-5 w-5 text-indigo-450" />
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Banner info on Mobile Ballot box & Post-voting */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-indigo-950/20 to-slate-900/40 border border-indigo-900/20 rounded-2xl p-6 md:p-8 flex items-start space-x-4">
                <div className="p-3 bg-indigo-500/10 rounded-xl text-indigo-400 shrink-0">
                  <PhoneCall className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Mozgóurna igénylés</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Betegség vagy mozgáskorlátozottság esetén mozgóurna igényelhető. Az igénylést akár a választások napján is be lehet nyújtani, de lehetőség szerint <strong>14:00 óráig</strong> érdemes megtenni, a szükséges igazoló dokumentumokkal együtt.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-emerald-950/20 to-slate-900/40 border border-emerald-900/20 rounded-2xl p-6 md:p-8 flex items-start space-x-4">
                <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-400 shrink-0">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Digitális biztonság és nyilvánosság</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    A szavazóhelyiség lezárása után a jegyzőkönyveket lefényképezik és feltöltik az AEP alkalmazásába, így az eredmények szinte azonnal láthatóvá válnak. A szavazatszámlálást kamerák rögzítik a választási folyamat teljes átláthatósága érdekében.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: BALLOTS */}
        {activeTab === "ballots" && (
          <div className="space-y-12 animate-in fade-in duration-300">
            {/* The 5 ballots list */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Az öt darab szavazólap, amit a kezedbe kapsz</h2>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                {ballots.map((ballot, idx) => (
                  <div key={idx} className="bg-slate-900/40 border border-slate-800 rounded-2xl p-5 hover:border-indigo-500/20 transition-all duration-200 flex flex-col justify-between">
                    <div>
                      <div className="h-8 w-8 rounded-lg bg-indigo-600/10 text-indigo-400 font-bold flex items-center justify-center text-sm border border-indigo-500/10 mb-4">
                        {idx + 1}
                      </div>
                      <h3 className="text-base font-bold text-white mb-2">{ballot.name}</h3>
                      <p className="text-xs text-slate-450 leading-relaxed">{ballot.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Importance of local vs regional level */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
              <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 md:p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400">
                    <Landmark className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white">Helyhatósági Választások Fontossága</h3>
                </div>
                <ul className="space-y-4 text-sm text-slate-350">
                  <li className="leading-relaxed">
                    <strong className="text-white block mb-0.5">Közvetlen befolyás a helyi ügyekre:</strong> A helyben megválasztott képviselők felelnek Székelykeresztúr infrastrukturális fejlesztéseiért, az oktatási intézmények fenntartásáért és a helyi gazdaság élénkítéséért.
                  </li>
                  <li className="leading-relaxed">
                    <strong className="text-white block mb-0.5">Közszolgáltatások minősége:</strong> Az önkormányzatok hatáskörébe tartozik a hulladékgazdálkodás, a közművek, a helyi közlekedés és a közösségi terek gondozása.
                  </li>
                  <li className="leading-relaxed">
                    <strong className="text-white block mb-0.5">Közösségépítés:</strong> A helyi vezetők programjai közvetlenül támogatják a civil szervezeteket és kulturális kezdeményezéseket.
                  </li>
                </ul>
              </div>

              <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 md:p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400">
                    <Landmark className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white">Megyei Választások Fontossága</h3>
                </div>
                <ul className="space-y-4 text-sm text-slate-350">
                  <li className="leading-relaxed">
                    <strong className="text-white block mb-0.5">Regionális fejlesztési tervek:</strong> A megyei tanács határozza meg a nagyobb léptékű beruházásokat, például az ipari parkok létrehozását, megyei utak korszerűsítését és turisztikai projekteket.
                  </li>
                  <li className="leading-relaxed">
                    <strong className="text-white block mb-0.5">Közigazgatási koordináció:</strong> Segíti és összehangolja a különböző kistelepülési önkormányzatok munkáját, biztosítva a források optimális elosztását.
                  </li>
                  <li className="leading-relaxed">
                    <strong className="text-white block mb-0.5">Egyenlőtlenségek csökkentése:</strong> Fontos szerepe van a hátrányos helyzetű övezetek felzárkóztatásában és szociális támogatási hálózatok működtetésében.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: EP */}
        {activeTab === "ep" && (
          <div className="space-y-10 animate-in fade-in duration-300">
            {/* Intro to EP */}
            <div className="bg-slate-900/40 border border-slate-800 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-8">
              <div className="shrink-0 p-6 bg-indigo-600/10 text-indigo-400 rounded-2xl border border-indigo-500/20">
                <Globe className="h-16 w-16" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Miért fontos az Európai Parlament?</h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  Az Európai Parlament az egyetlen közvetlenül választott uniós testület, amely közvetlenül képviseli az EU-s állampolgárokat a jogalkotási és döntési folyamatokban. Románia lakosaként az itt leadott szavazatok határozzák meg, hogy kik képviselik az ország (és Székelyföld) érdekeit az elkövetkező 5 évben Brüsszelben és Strasbourgban.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-400 pt-4 border-t border-slate-800">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-emerald-500" />
                    <span>Jogszabályalkotás</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-emerald-500" />
                    <span>EU-s költségvetés elfogadása</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-emerald-500" />
                    <span>Bizottság demokratikus ellenőrzése</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Decision Areas */}
            <div>
              <h3 className="text-lg font-bold text-white mb-6 text-center">Főbb döntési területek</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {epDecisionAreas.map((area, idx) => (
                  <div key={idx} className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 hover:border-indigo-500/20 transition-all duration-200">
                    <h4 className="text-sm font-bold text-white mb-2">{area.title}</h4>
                    <p className="text-xs text-slate-450 leading-relaxed">{area.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Voting
