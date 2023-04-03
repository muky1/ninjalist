import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Ninjas.module.css";

export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    return {
        props: {ninjas: data}
    }
}

const Ninjas = ({ninjas}: any) => {
    return ( 
        <div>
            <Head>
                <title>Ninja List - Ninja Listing</title>       
            </Head>
            <h1>ALL NINJAS</h1>
            {ninjas.map((ninja: any) =>(
                <Link href={"/ninjas/" + ninja.id} key={ninja.id}>
                    <div className={styles.single}>
                        <h3>{ ninja.name }</h3>
                    </div>
                </Link>
            ))}
        </div>
        
     );
}
 
export default Ninjas;