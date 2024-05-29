import { Card, CardContent, CardHeader } from "@/components/ui/card"


function Home() {

  return (
    <>
    <h1>Home</h1>
    <Card>
      <CardHeader className="cardHeader">Székelykeresztúr Betfalva</CardHeader>
      <CardContent>
            Sorszám 75.
      </CardContent>
      <CardContent>
          Betlfavi kultúrház
      </CardContent>
      <CardContent>
      Betfalva, Erzsébetkút és Bözsefalva utca, Nyikó sétány
      </CardContent>
      
    </Card>
    </>
  )
}
  
  export default Home
  