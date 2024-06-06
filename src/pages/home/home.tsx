import { Card, CardContent, CardHeader } from "@/components/ui/card"
import  BerdeMozes from "../../../public/BerdeMozes.jpg"
import Vallalkozok from "../../../public/vallalkozok.jpg"
import KatolikusPlebania from "../../../public/KatolikusPlebania.png"
import PetofiKriza from "../../../public/PetofiKriza.jpg"
import PetofiTimafalva from "../../../public/petofi.jpg"
import Betfalva from "../../../public/betfalva.jpg";

function Home() {

  return (
    
    <>
    <h1>Szavazó körzetek</h1>

    {/* 75 Betfalva */}
    <Card className="card">
      <CardContent> <img src={Betfalva} alt="szekelykeresztur betfalvi kulturhaz"></img> </CardContent>
      <CardHeader className="cardHeader">Közigazgatási egység: Székelykeresztúr Betfalva</CardHeader>
      <CardContent className="cardContent">
            Sorszám 75.
      </CardContent>
      <CardContent className="cardContent">
      Szavazóhelység székhelye: Betlfavi kultúrház
      </CardContent>
      <CardContent className="cardContent">
      Szavazóhelység körzete: Betfalva, Erzsébetkút és Bözsefalva utca, Nyikó sétány
      </CardContent>
    </Card>

    {/*76  Szekelykeresztur */}
    <Card className="card">
      <CardContent> <img src={PetofiTimafalva} alt="szekelykeresztur petofi sandor timafalva"></img> </CardContent>
      <CardHeader className="cardHeader">Közigazgatási egység: Székelykeresztúr</CardHeader>
      <CardContent className="cardContent">
            Sorszám 76.
      </CardContent>
      <CardContent className="cardContent">
      Szavazóhelység székhelye: Petőfi Sándor Általános Iskola, Timafalvi utca 43 szám
      </CardContent>
      <CardContent className="cardContent">
      Szavazóhelység körzete: Timafalvi, Vasút, Állomás, Varga Katalin, Temető, Gyár, Marin Preda, Jegenye, Virág, Malom, Kordaberek utcák
      </CardContent>
    </Card>

 {/*77  Szekelykeresztur */}
 <Card className="card">
      <CardContent> <img src={PetofiKriza} alt="szekelykeresztur petofi sandor kriza janos"></img> </CardContent>
      <CardHeader className="cardHeader">Közigazgatási egység: Székelykeresztúr</CardHeader>
      <CardContent className="cardContent">
            Sorszám 77.
      </CardContent>
      <CardContent className="cardContent">
      Szavazóhelység székhelye: Petőfi Sándor Általános Iskola, Kriza János utca 27 szám
      </CardContent>
      <CardContent className="cardContent">
      Szavazóhelység körzete: Hargita, Katustava, Búza, Kriza János, Farkas, Gyárfáskert, Budai Nagy Antal, Cserépcsűr, Gábor Áron, George Coşbuc, Rövid utcák
      </CardContent>
    </Card>

{/*78  Szekelykeresztur */}
<Card className="card">
      <CardContent> <img src={KatolikusPlebania} alt="szekelykeresztur katolikus plebania"></img> </CardContent>
      <CardHeader className="cardHeader">Közigazgatási egység: Székelykeresztúr</CardHeader>
      <CardContent className="cardContent">
            Sorszám 78.
      </CardContent>
      <CardContent className="cardContent">
      Szavazóhelység székhelye: Római Katolikus Plébánia Szabadság tér 62 szám
      </CardContent>
      <CardContent className="cardContent">
      Szavazóhelység körzete: Kossuth negyed A1, A2, A3, A4, B1, B2, B3, B4, B5, B6, B7, B8, B9, B10, B11, B12, B13, C1, C2, C3, D1, D2 tömbházak, Szabadság tér, Csekefalvi, Kölcsey Ferencz utcák, Garázs udvar
      </CardContent>
    </Card>

    {/*79  Szekelykeresztur */}
<Card className="card">
      <CardContent> <img src={Vallalkozok} alt="szekelykeresztur vallalkozok haza kriza janos"></img> </CardContent>
      <CardHeader className="cardHeader">Közigazgatási egység: Székelykeresztúr</CardHeader>
      <CardContent className="cardContent">
            Sorszám 79.
      </CardContent>
      <CardContent className="cardContent">
      Szavazóhelység székhelye: Vállalkozók háza, Szabadság tér 22 szám
      </CardContent>
      <CardContent className="cardContent">
      Szavazóhelység körzete: Kossuth negyed B14, B15, D3, D4, E1, E2, E3, E4, E5, E6, E7, E8, E9, E10, E11, E12, E13, E14, F1, G1, G2, I-80 tömbházak, Kossuth Lajos, Küküllő, Arany János, Kertek, Petőfi Sándor, Bem József, Fürdő utcák
      </CardContent>
    </Card>

    {/*80  Szekelykeresztur */}
<Card className="card">
<CardContent> <img src={BerdeMozes} alt="szekelykeresztur berde mozes orban balazs"></img> </CardContent>
      <CardHeader className="cardHeader">Közigazgatási egység: Székelykeresztúr</CardHeader>
      <CardContent className="cardContent">
            Sorszám 80.
      </CardContent>
      <CardContent className="cardContent">
      Szavazóhelység székhelye: Berde Mózes Unitárius Gimnázium, Orbán Balázs utca 1 szám
      </CardContent>
      <CardContent className="cardContent">
      Szavazóhelység körzete: Dávid Ferenc lakónegyed, Orbán Balázs, Stadion, Eminescu, Henter, Kecskés, Berde Mózes, Ady Endre, Gyertyánffy István, Szécsi András, Székely, Zata, Sóskút utcák
      </CardContent>
    </Card>

     {/*81  Szekelykeresztur */}
<Card className="card">
      <CardHeader className="cardHeader">Közigazgatási egység: Székelykeresztúr</CardHeader>
      <CardContent className="cardContent">
            Sorszám 81.
      </CardContent>
      <CardContent className="cardContent">
      Szavazóhelység székhelye: Fiatfalvi Családtervezési Központ, Fiatfalva utca 188 szám
      </CardContent>
      <CardContent className="cardContent">
      Szavazóhelység körzete: Fiatfalva utca
      </CardContent>
    </Card>
    </>
  )
}
  
  export default Home
  
