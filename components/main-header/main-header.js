import Link from "next/link";
import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css"
import Image from "next/image";
import NavLink from "./nav-link";


export default function MainHeader() {


    return (
        <header className={classes.header}>
            <Link className={classes.logo} href="/">
                <Image src={logoImg} alt="A plate with food on it" priority />
                Next Level Food
            </Link>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <NavLink href="/meals" > Browse meals </NavLink>
                    </li>
                    <li>
                        <NavLink href="/community" > Food Community </NavLink>

                    </li>
                </ul>
            </nav>
        </header>
    )
}