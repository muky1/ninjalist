import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

const Navbar = () => {
    return ( 
        <div>
            <nav>
                <div className="logo">
                    <Image src={"/ninja-logo.png"} height={80} width={100} alt={"ninja-logo"}></Image>
                </div>
                <Link href={"/"}>Home</Link>
                <Link href={"/about"}>About</Link>
                <Link href={"/ninjas"}>Ninja Listing</Link>
            </nav>
        </div>
     );
}
 
export default Navbar;