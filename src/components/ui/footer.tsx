import { Card, CardContent, CardHeader } from "./card"
import CommunityLogo from "../../../public/Community.png"
import FacebookLogo from "../../../public/facebook.svg"
import InstagramLogo from "../../../public/instagram.svg"

function Footer() {
    return (
       <div className="footer"> 
        <p> </p>
          <Card>
            <CardContent>
          <img src={CommunityLogo} width={60} height={60} alt="Logo"></img>
          </CardContent>
          </Card>
          <Card>
                <CardHeader>Egy Esély a Közösségért Egyesület</CardHeader>
                    <CardContent>Székelykeresztúr</CardContent>
                    <CardContent>Hargita megye - 535400</CardContent>
                    <CardContent>Email - office@ospc.ro</CardContent>
          </Card>

          <Card>
            <CardContent>
            <a href="https://www.facebook.com/ospcom">
                <img src={FacebookLogo} width={80} height={80} alt="Facebook Logo"/> 
            </a>
            <a href="https://www.instagram.com/ospc.egyesulet/">
                <img src={InstagramLogo} width={65} height={80} alt="Instagram Logo"/> 
            </a>
            </CardContent>
          </Card>
       </div>
    )
}

export default Footer