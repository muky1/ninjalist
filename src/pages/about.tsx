import Head from "next/head";
import styles from "../styles/About.module.css"

const About = () => {
    return ( 
        <div>
            <Head>
                <title>Ninja List - About</title>       
            </Head>
            <h1 className={styles.title}>ABOUT</h1>
            <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores odio corrupti laborum facere corporis rerum dolorum id ipsum? Sunt expedita delectus molestiae ullam, dolore voluptatem. Sequi ad molestiae atque ratione.</p>
            <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nemo iste illum numquam qui natus ab officia architecto veniam. Sint aut possimus, repellendus quod doloribus quas ratione sed dolores distinctio.</p>
        </div>
     );
}
 
export default About;