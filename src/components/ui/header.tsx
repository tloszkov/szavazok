import { Menubar } from "@radix-ui/react-menubar"
import { Button } from "./button"
import { Link } from "react-router-dom"

function Header() {
    return (
        <main className="w-full">
            <Menubar className="h-1/2">
                <Link to={"/"}><Button className="h-1/2">Főoldal</Button></Link>
                <Link to={"/voting"}><Button >Szavazás</Button></Link>
                <Link to={"/about"}><Button>Rólunk</Button></Link>
            </Menubar>
        </main>
    )
}

export default Header