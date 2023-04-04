import styles from "../styles/Auth.module.css"
import { useRouter } from "next/router";
import { useState } from "react";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const router = useRouter();

   function handleLogin (event: any) {
        event.preventDefault()

        if (email === "email@gmail.com" && password === "password123") {
            router.push("/");
        } else {
            setErrorMessage("Invalid email or password");
        } 
   }

   

    return ( 
        <div>
            
            <div className={styles["form-wrapper"]}>
                <h1>Login</h1>
                <form className={styles.form} onSubmit={handleLogin}>
                    <div>
                        <input type="email" name="email" id="email" placeholder="Email" className={styles.input} onChange={(event) => setEmail(event.target.value)}/>
                    </div>
                    <div>
                        <input type="password" name="password" id="password" placeholder="Password" className={styles.input} onChange={(event) => setPassword(event.target.value)}/>
                    </div>
                    {errorMessage && <div>{errorMessage}</div>}
                    <button type="submit" className={styles.button}>Login</button>
                </form>
            </div>
        </div>
     );
}
 
export default LoginPage;