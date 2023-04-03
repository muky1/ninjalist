import styles from "../styles/Auth.module.css"
import Router from "next/router";

const LoginPage = () => {
    return ( 
        <div>
            
            <div className={styles["form-wrapper"]}>
                <h1>Login</h1>
                <form className={styles.form}>
                    <div>
                        <input type="email" name="email" id="email" placeholder="Email" className={styles.input}/>
                    </div>
                    <div>
                        <input type="password" name="password" id="password" placeholder="Password" className={styles.input}/>
                    </div>
                    <button type="submit" className={styles.button}>Login</button>
                </form>
            </div>
        </div>
     );
}
 
export default LoginPage;