import { Menubar } from "@radix-ui/react-menubar"
import { Button } from "./button"
import { Link } from "react-router-dom"

function Header() {
    return (
        <main>
            <Menubar>
                <Link to={"/"}><Button className={"w-1/6 rounded-none"}>Főoldal</Button></Link>
                <Link to={"/voting"}><Button className={"w-1/6 rounded-none"}>Szavazás</Button></Link>
                <Link to={"/about"}><Button className={"w-1/6 rounded-none"}>Rólunk</Button></Link>
            </Menubar>
            <div className="bg-zinc-950 dark:bg-white">
                Alma
            </div>
        </main>
    )
}

export default Header