import { useState, useEffect, useRef } from "react"
import { Search, MapPin, X, ChevronRight, Clock, HelpCircle, Undo2 } from "lucide-react"
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet"
import L from "leaflet"
import "leaflet/dist/leaflet.css"

// Define the voting district interface
interface District {
  sorszam: number;
  egyseg: string;
  helyszin: string;
  korzet: string;
  utcak: string[];
  image: string;
  lat: number;
  lng: number;
}

const DISTRICTS_DATA: District[] = [
  {
    sorszam: 75,
    egyseg: "Székelykeresztúr Betfalva",
    helyszin: "Betfalvi Kultúrház",
    korzet: "Betfalva, Erzsébetkút és Bözsefalva utca, Nyikó sétány",
    utcak: ["Betfalva", "Erzsébetkút", "Bözsefalva", "Nyikó sétány", "Beta", "Bözsefalva utca"],
    image: "/betfalva.jpg",
    lat: 46.2894,
    lng: 25.0830
  },
  {
    sorszam: 76,
    egyseg: "Székelykeresztúr",
    helyszin: "Petőfi Sándor Általános Iskola, Timafalvi utca 43 szám",
    korzet: "Timafalvi, Vasút, Állomás, Varga Katalin, Temető, Gyár, Marin Preda, Jegenye, Virág, Malom, Kordaberek utcák",
    utcak: ["Timafalvi", "Vasút", "Állomás", "Varga Katalin", "Temető", "Gyár", "Marin Preda", "Jegenye", "Virág", "Malom", "Kordaberek", "Timafalvi utca", "Vasút utca", "Állomás utca", "Varga Katalin utca", "Temető utca", "Gyár utca", "Jegenye utca", "Virág utca", "Malom utca", "Kordaberek utca"],
    image: "/petofi.jpg",
    lat: 46.2922,
    lng: 25.0475
  },
  {
    sorszam: 77,
    egyseg: "Székelykeresztúr",
    helyszin: "Petőfi Sándor Általános Iskola, Kriza János utca 27 szám",
    korzet: "Hargita, Katustava, Búza, Kriza János, Farkas, Gyárfáskert, Budai Nagy Antal, Cserépcsűr, Gábor Áron, George Coşbuc, Rövid utcák",
    utcak: ["Hargita", "Katustava", "Búza", "Kriza János", "Farkas", "Gyárfáskert", "Budai Nagy Antal", "Cserépcsűr", "Gábor Áron", "George Coşbuc", "Rövid", "Hargita utca", "Katustava utca", "Búza utca", "Kriza János utca", "Farkas utca", "Gyárfáskert utca", "Budai Nagy Antal utca", "Cserépcsűr utca", "Gábor Áron utca", "Rövid utca"],
    image: "/PetofiKriza.jpg",
    lat: 46.2882,
    lng: 25.0260
  },
  {
    sorszam: 78,
    egyseg: "Székelykeresztúr",
    helyszin: "Római Katolikus Plébánia, Szabadság tér 62 szám",
    korzet: "Kossuth negyed A1-A4, B1-B13, C1-C3, D1-D2 tömbházak, Szabadság tér, Csekefalvi, Kölcsey Ferencz utcák, Garázs udvar",
    utcak: ["Kossuth negyed", "Szabadság tér", "Csekefalvi", "Kölcsey Ferencz", "Garázs udvar", "Kölcsey Ferenc", "Csekefalvi utca", "Kölcsey Ferenc utca", "Kölcsey Ferencz utca", "Szabadság ter", "tömbház", "Kossuth negyed A1", "Kossuth negyed A2", "Kossuth negyed A3", "Kossuth negyed A4", "Kossuth negyed B1", "Kossuth negyed B2", "Kossuth negyed B3", "Kossuth negyed B4", "Kossuth negyed B5", "Kossuth negyed B6", "Kossuth negyed B7", "Kossuth negyed B8", "Kossuth negyed B9", "Kossuth negyed B10", "Kossuth negyed B11", "Kossuth negyed B12", "Kossuth negyed B13", "Kossuth negyed C1", "Kossuth negyed C2", "Kossuth negyed C3", "Kossuth negyed D1", "Kossuth negyed D2"],
    image: "/KatolikusPlebania.png",
    lat: 46.2925,
    lng: 25.0410
  },
  {
    sorszam: 79,
    egyseg: "Székelykeresztúr",
    helyszin: "Vállalkozók háza, Szabadság tér 22 szám",
    korzet: "Kossuth negyed B14-B15, D3-D4, E1-E14, F1, G1-G2, I-80 tömbházak, Kossuth Lajos, Küküllő, Arany János, Kertek, Petőfi Sándor, Bem József, Fürdő utcák",
    utcak: ["Kossuth negyed", "Kossuth Lajos", "Küküllő", "Arany János", "Kertek", "Petőfi Sándor", "Bem József", "Fürdő", "Kossuth Lajos utca", "Küküllő utca", "Arany János utca", "Kertek utca", "Petőfi Sándor utca", "Bem József utca", "Fürdő utca", "Kossuth negyed B14", "Kossuth negyed B15", "Kossuth negyed D3", "Kossuth negyed D4", "Kossuth negyed E1", "Kossuth negyed E2", "Kossuth negyed E3", "Kossuth negyed E4", "Kossuth negyed E5", "Kossuth negyed E6", "Kossuth negyed E7", "Kossuth negyed E8", "Kossuth negyed E9", "Kossuth negyed E10", "Kossuth negyed E11", "Kossuth negyed E12", "Kossuth negyed E13", "Kossuth negyed E14", "Kossuth negyed F1", "Kossuth negyed G1", "Kossuth negyed G2", "Kossuth negyed I-80"],
    image: "/vallalkozok.jpg",
    lat: 46.2900,
    lng: 25.0322
  },
  {
    sorszam: 80,
    egyseg: "Székelykeresztúr",
    helyszin: "Berde Mózes Unitárius Gimnázium, Orbán Balázs utca 1 szám",
    korzet: "Dávid Ferenc lakónegyed, Orbán Balázs, Stadion, Eminescu, Henter, Kecskés, Berde Mózes, Ady Endre, Gyertyánffy István, Szécsi András, Székely, Zata, Sóskút utcák",
    utcak: ["Dávid Ferenc lakónegyed", "Orbán Balázs", "Stadion", "Eminescu", "Henter", "Kecskés", "Berde Mózes", "Ady Endre", "Gyertyánffy István", "Szécsi András", "Székely", "Zata", "Sóskút", "Orbán Balázs utca", "Stadion utca", "Eminescu utca", "Henter utca", "Kecskés utca", "Berde Mózes utca", "Ady Endre utca", "Gyertyánffy István utca", "Szécsi András utca", "Székely utca", "Zata utca", "Sóskút utca"],
    image: "/BerdeMozes.jpg",
    lat: 46.2822,
    lng: 25.0275
  },
  {
    sorszam: 81,
    egyseg: "Székelykeresztúr Fiatfalva",
    helyszin: "Fiatfalvi Családtervezési Központ, Fiatfalva utca 188 szám",
    korzet: "Fiatfalva utca",
    utcak: ["Fiatfalva utca", "Fiatfalva", "Filias"],
    image: "",
    lat: 46.2693,
    lng: 25.0161
  }
]

// Custom map marker component to trigger flying the map center
function MapController({ center, zoom }: { center: [number, number]; zoom: number }) {
  const map = useMap()
  useEffect(() => {
    map.flyTo(center, zoom, {
      duration: 1.2,
      easeLinearity: 0.25
    })
  }, [center, zoom, map])
  return null
}

// Leaflet DivIcon creator matching the active/inactive state
const createMarkerIcon = (sorszam: number, isActive: boolean) => {
  return L.divIcon({
    html: `<div class="flex items-center justify-center w-8 h-8 rounded-full border-2 shadow-lg transition-all duration-300 ${
      isActive
        ? 'bg-emerald-500 border-white text-white scale-125 ring-4 ring-emerald-500/30 font-bold marker-pulse-active'
        : 'bg-indigo-600 border-slate-900 text-white hover:bg-indigo-500 hover:scale-110'
    }">
      <span class="text-xs font-bold font-sans">${sorszam}</span>
    </div>`,
    className: 'custom-marker-icon',
    iconSize: [32, 32],
    iconAnchor: [16, 16],
  });
};

function Home() {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<District[]>(DISTRICTS_DATA)
  const [selectedDistrict, setSelectedDistrict] = useState<District | null>(null)
  
  // Map positioning state
  const [mapCenter, setMapCenter] = useState<[number, number]>([46.2892, 25.0375])
  const [mapZoom, setMapZoom] = useState(13)

  // Suggestion list dropdown
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const suggestionRef = useRef<HTMLDivElement>(null)

  // Countdown timer state
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  // Calculate countdown to next local election date (simulated: June 11, 2028)
  useEffect(() => {
    const targetDate = new Date("2028-06-11T07:00:00").getTime()
    
    const interval = setInterval(() => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference <= 0) {
        clearInterval(interval)
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)
        setTimeLeft({ days, hours, minutes, seconds })
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  // Close suggestions if clicked outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (suggestionRef.current && !suggestionRef.current.contains(event.target as Node)) {
        setShowSuggestions(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // Handle Search Input & generate autocompletion/suggestions
  const handleSearchChange = (val: string) => {
    setSearchQuery(val)
    if (!val.trim()) {
      setSearchResults(DISTRICTS_DATA)
      setSuggestions([])
      setShowSuggestions(false)
      return
    }

    const query = val.toLowerCase()
    
    // Filter districts
    const filtered = DISTRICTS_DATA.filter((district) => {
      const matchSorszam = district.sorszam.toString() === query;
      const matchHelyszin = district.helyszin.toLowerCase().includes(query);
      const matchStreet = district.utcak.some(street => street.toLowerCase().includes(query));
      return matchSorszam || matchHelyszin || matchStreet;
    })
    setSearchResults(filtered)

    // Generate street-specific suggestions
    const streetMatches: string[] = []
    DISTRICTS_DATA.forEach((district) => {
      district.utcak.forEach((street) => {
        if (street.toLowerCase().includes(query) && !streetMatches.includes(street)) {
          streetMatches.push(street)
        }
      })
    })
    setSuggestions(streetMatches.slice(0, 5))
    setShowSuggestions(streetMatches.length > 0)
  }

  const selectSuggestion = (street: string) => {
    setSearchQuery(street)
    setShowSuggestions(false)
    const filtered = DISTRICTS_DATA.filter((district) => 
      district.utcak.some(s => s.toLowerCase() === street.toLowerCase())
    )
    setSearchResults(filtered)
    if (filtered.length > 0) {
      focusDistrict(filtered[0])
    }
  }

  const focusDistrict = (district: District) => {
    setSelectedDistrict(district)
    setMapCenter([district.lat, district.lng])
    setMapZoom(16.5)
    
    // Scroll to the card
    const element = document.getElementById(`district-card-${district.sorszam}`)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" })
    }
  }

  const resetFilter = () => {
    setSearchQuery("")
    setSearchResults(DISTRICTS_DATA)
    setSelectedDistrict(null)
    setMapCenter([46.2892, 25.0375])
    setMapZoom(13)
    setSuggestions([])
    setShowSuggestions(false)
  }

  return (
    <div className="container mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="text-center max-w-4xl mx-auto mb-10">
        <span className="inline-flex items-center rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-400 border border-indigo-500/20 mb-4 uppercase tracking-wider">
          Szavazókör kereső portál
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
          Találd meg a szavazókörödet egyszerűen!
        </h1>
        <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto">
          Add meg az utcád nevét, és azonnal megmutatjuk, melyik körzetben, hol tudod leadni a szavazatodat Székelykeresztúron és környékén.
        </p>
      </div>

      {/* Countdown Panel */}
      <div className="mb-10 max-w-4xl mx-auto bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 backdrop-blur-sm shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start space-x-2 text-indigo-400 font-semibold mb-1">
            <Clock className="h-4 w-4" />
            <span>Következő Helyhatósági Választás</span>
          </div>
          <p className="text-xs text-slate-500">2028. június 11-én, vasárnap reggel 07:00-tól</p>
        </div>
        <div className="flex items-center space-x-3 sm:space-x-4">
          <div className="flex flex-col items-center">
            <div className="bg-slate-950 border border-slate-850 rounded-xl px-4 py-3 min-w-[70px] text-center">
              <span className="text-xl sm:text-2xl font-bold text-white block">{timeLeft.days}</span>
              <span className="text-[10px] text-slate-500 uppercase font-medium">Nap</span>
            </div>
          </div>
          <span className="text-slate-600 font-bold text-xl">:</span>
          <div className="flex flex-col items-center">
            <div className="bg-slate-950 border border-slate-850 rounded-xl px-4 py-3 min-w-[70px] text-center">
              <span className="text-xl sm:text-2xl font-bold text-white block">{timeLeft.hours}</span>
              <span className="text-[10px] text-slate-500 uppercase font-medium">Óra</span>
            </div>
          </div>
          <span className="text-slate-600 font-bold text-xl">:</span>
          <div className="flex flex-col items-center">
            <div className="bg-slate-950 border border-slate-850 rounded-xl px-4 py-3 min-w-[70px] text-center">
              <span className="text-xl sm:text-2xl font-bold text-white block">{timeLeft.minutes}</span>
              <span className="text-[10px] text-slate-500 uppercase font-medium">Perc</span>
            </div>
          </div>
          <span className="text-slate-600 font-bold text-xl">:</span>
          <div className="flex flex-col items-center">
            <div className="bg-slate-950 border border-slate-850 rounded-xl px-4 py-3 min-w-[70px] text-center">
              <span className="text-xl sm:text-2xl font-bold text-white block">{timeLeft.seconds}</span>
              <span className="text-[10px] text-slate-500 uppercase font-medium">Masp</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Responsive Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 animate-in fade-in duration-500">
        
        {/* Left Side: Search & Card List (7 cols) */}
        <div className="lg:col-span-7 flex flex-col space-y-6">
          
          {/* Search Box */}
          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-5 shadow-xl backdrop-blur-sm relative z-30">
            <div className="flex items-center space-x-3 mb-3">
              <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400">
                <Search className="h-5 w-5" />
              </div>
              <h2 className="text-lg font-bold text-white">Szavazókör Kereső</h2>
            </div>
            
            <div className="relative" ref={suggestionRef}>
              <div className="flex items-center bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-1.5 focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-500/20 transition-all">
                <input
                  type="text"
                  placeholder="Írd be az utcádat (pl. Orbán Balázs, Kossuth)..."
                  value={searchQuery}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  onFocus={() => searchQuery.trim() && setShowSuggestions(true)}
                  className="w-full bg-transparent border-0 text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-0 text-sm py-2"
                />
                {searchQuery ? (
                  <button onClick={resetFilter} className="text-slate-400 hover:text-white p-1 border-0 bg-transparent w-auto">
                    <X className="h-4.5 w-4.5" />
                  </button>
                ) : null}
              </div>

              {/* Autocomplete Suggestions */}
              {showSuggestions && suggestions.length > 0 && (
                <div className="absolute left-0 right-0 mt-2 bg-slate-900 border border-slate-800 rounded-xl shadow-2xl overflow-hidden z-50">
                  {suggestions.map((street, index) => (
                    <div
                      key={index}
                      onClick={() => selectSuggestion(street)}
                      className="px-4 py-3 text-sm text-slate-350 hover:bg-indigo-650 hover:text-white cursor-pointer transition-colors flex items-center justify-between"
                    >
                      <span>{street}</span>
                      <ChevronRight className="h-4 w-4 opacity-50" />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {searchQuery && (
              <div className="mt-4 flex items-center justify-between text-xs">
                <span className="text-slate-450">
                  Találatok: <strong className="text-indigo-400">{searchResults.length} szavazókör</strong>
                </span>
                <button
                  onClick={resetFilter}
                  className="text-indigo-400 hover:underline flex items-center space-x-1 border-0 bg-transparent w-auto cursor-pointer"
                >
                  <Undo2 className="h-3.5 w-3.5" />
                  <span>Keresés törlése</span>
                </button>
              </div>
            )}
          </div>

          {/* Cards List */}
          <div className="space-y-4 max-h-[750px] overflow-y-auto pr-2">
            {searchResults.length > 0 ? (
              searchResults.map((district) => {
                const isActive = selectedDistrict?.sorszam === district.sorszam
                return (
                  <div
                    key={district.sorszam}
                    id={`district-card-${district.sorszam}`}
                    onClick={() => focusDistrict(district)}
                    className={`group rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden flex flex-col md:flex-row ${
                      isActive
                        ? "bg-gradient-to-br from-indigo-950/20 to-slate-900/80 border-indigo-500 ring-2 ring-indigo-500/20 shadow-2xl scale-[1.01]"
                        : "bg-slate-900/30 border-slate-800/80 hover:border-slate-700/80 hover:bg-slate-900/40 shadow-lg"
                    }`}
                  >
                    {/* Image panel */}
                    <div className="md:w-1/3 h-48 md:h-auto relative shrink-0 overflow-hidden bg-slate-950 flex items-center justify-center">
                      {district.image ? (
                        <img
                          src={district.image}
                          alt={district.helyszin}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          onError={(e) => {
                            // Fallback to placeholder if img fails
                            (e.target as HTMLImageElement).src = "/vite.png"
                          }}
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-slate-900 to-indigo-950/50 flex flex-col items-center justify-center p-6 text-indigo-400 group-hover:text-indigo-300 transition-colors">
                          <MapPin className="h-10 w-10 mb-2" />
                          <span className="text-[9px] uppercase font-bold tracking-wider text-slate-500">Térkép helyszín</span>
                        </div>
                      )}
                      <div className="absolute top-3 left-3 px-3 py-1 bg-slate-950/90 text-indigo-400 font-extrabold text-xs rounded-full border border-slate-800/60 shadow-md">
                        SORSZÁM {district.sorszam}
                      </div>
                    </div>

                    {/* Content panel */}
                    <div className="p-5 flex flex-col justify-between flex-grow">
                      <div>
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                            {district.egyseg}
                          </span>
                        </div>
                        <h3 className="text-base font-bold text-white leading-snug mb-2 group-hover:text-indigo-400 transition-colors">
                          {district.helyszin}
                        </h3>
                        <p className="text-xs text-slate-300 leading-relaxed line-clamp-3 mb-4">
                          <strong>Körzet: </strong>{district.korzet}
                        </p>
                      </div>

                      <div className="flex items-center justify-between border-t border-slate-800/40 pt-4 mt-2">
                        <span className="text-[10px] text-indigo-400 font-semibold flex items-center gap-1 group-hover:underline">
                          <MapPin className="h-3.5 w-3.5" />
                          <span>Mutasd a térképen</span>
                        </span>
                        <ChevronRight className="h-4.5 w-4.5 text-slate-600 group-hover:text-indigo-400 group-hover:translate-x-0.5 transition-all" />
                      </div>
                    </div>
                  </div>
                )
              })
            ) : (
              <div className="bg-slate-900/20 border border-dashed border-slate-800 rounded-2xl p-12 text-center">
                <HelpCircle className="h-10 w-10 text-slate-600 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-white mb-1">Nincs találat</h3>
                <p className="text-sm text-slate-500 max-w-sm mx-auto">
                  Nem találtunk szavazókört a keresett szóra. Kérjük, ellenőrizd az utca nevének írásmódját vagy keress egy másik szóra.
                </p>
                <button
                  onClick={resetFilter}
                  className="mt-4 inline-flex items-center space-x-2 px-4 py-2 bg-indigo-650 hover:bg-indigo-600 text-white text-xs font-semibold rounded-xl transition-all border-0 cursor-pointer"
                >
                  <span>Minden körzet mutatása</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Right Side: Sticky Interactive Leaflet Map (5 cols) */}
        <div className="lg:col-span-5">
          <div className="sticky top-24 bg-slate-900/40 border border-slate-800 rounded-2xl p-4 shadow-xl backdrop-blur-sm flex flex-col h-[550px] md:h-[650px]">
            <div className="flex items-center justify-between mb-3 shrink-0">
              <div className="flex items-center space-x-2">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 marker-pulse-active shrink-0"></div>
                <h2 className="text-sm font-bold text-white">Interaktív Térkép</h2>
              </div>
              {selectedDistrict && (
                <button
                  onClick={resetFilter}
                  className="text-xs text-indigo-400 hover:underline border-0 bg-transparent w-auto flex items-center space-x-1 cursor-pointer"
                >
                  <span>Alaphelyzet</span>
                </button>
              )}
            </div>

            {/* Map Container */}
            <div className="w-full flex-grow relative overflow-hidden rounded-xl border border-slate-800">
              <MapContainer
                center={mapCenter}
                zoom={mapZoom}
                style={{ height: "100%", width: "100%" }}
                zoomControl={false}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                  url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                />
                
                {DISTRICTS_DATA.map((district) => {
                  const isActive = selectedDistrict?.sorszam === district.sorszam
                  return (
                    <Marker
                      key={district.sorszam}
                      position={[district.lat, district.lng]}
                      icon={createMarkerIcon(district.sorszam, isActive)}
                      eventHandlers={{
                        click: () => {
                          setSelectedDistrict(district)
                          setMapCenter([district.lat, district.lng])
                          setMapZoom(16.5)
                          const element = document.getElementById(`district-card-${district.sorszam}`)
                          if (element) {
                            element.scrollIntoView({ behavior: "smooth", block: "center" })
                          }
                        }
                      }}
                    >
                      <Popup>
                        <div className="p-1 text-slate-100 font-sans">
                          <span className="text-[10px] text-indigo-400 font-bold block uppercase tracking-wider mb-0.5">Sorszám {district.sorszam}</span>
                          <strong className="text-xs text-white block mb-1 leading-tight">{district.helyszin}</strong>
                          <p className="text-[10px] text-slate-400 leading-snug">{district.egyseg}</p>
                        </div>
                      </Popup>
                    </Marker>
                  )
                })}

                <MapController center={mapCenter} zoom={mapZoom} />
              </MapContainer>
            </div>
            
            {/* Map Footer status */}
            <div className="mt-3 shrink-0 flex items-center justify-between text-xs text-slate-400">
              {selectedDistrict ? (
                <span className="flex items-center gap-1.5 text-indigo-400">
                  <MapPin className="h-4 w-4 shrink-0" />
                  <span>Kijelölve: Sorszám {selectedDistrict.sorszam}</span>
                </span>
              ) : (
                <span>Kattints egy kártyára vagy egy pontra!</span>
              )}
              <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Székelykeresztúr</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Home
