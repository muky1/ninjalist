import Link from "next/link";
import styles from "../styles/NotFound.module.css"
import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";


const NotFound = () => {
    const router = useRouter();

   useEffect(() => {
    setTimeout(() => {
        router.push("/");
    }, 5000);
   }, []);
   
    return (
        <div>
            <Head>
                <title>Ninja List - 404 Not Found</title>       
            </Head>
            <div className={styles.notfound}>
                <h1>Error 404</h1>
                <p>The requested page cannot be found...</p>
                <p>You will be automatically redirected after 5 seconds, or you can click on the Homepage link below!</p>
                <p>You can return to the <Link href={"/"} className={styles.link}>Homepage</Link></p>
            </div>
        </div>
     );
}
 
export default NotFound;