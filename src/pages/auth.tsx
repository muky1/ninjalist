import styles from "../styles/Auth.module.css"
import { useRouter } from "next/router";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { isLoggedInState } from "../components/atoms/isLoggedInState";
import { userState } from "../components/atoms/userState";
 
const LoginPage = () => {
    const [errorMessage, setErrorMessage] = useState("");
    const router = useRouter();
    const [user, setUser] = useRecoilState(userState);
    const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInState);

    const handleEmailChange = (event: React.FormEvent<EventTarget>) => {
        setUser((prevState) => ({
            ...prevState,
            email: (event.target as HTMLInputElement).value
        }))
    }

    const handlePasswordChange = (event: React.FormEvent<EventTarget>) => {
        setUser((prevState) => ({
            ...prevState,
            password: (event.target as HTMLInputElement).value
        }))
    }

   function handleLogin (event: React.FormEvent<EventTarget>) {
        event.preventDefault()

        if (user.email === "email@gmail.com" && user.password === "password123") {
            setIsLoggedIn(true);
            router.push("/");
        } else {
            setErrorMessage("Invalid email or password");
        } 
   }

   

    return ( 
        <div className={styles["container"]}>  
            <div className={styles["form-wrapper"]}>
                <h1>Login</h1>
                <form className={styles.form} onSubmit={handleLogin}>
                    <div>
                        <input type="email" 
                        name="email" id="email" 
                        placeholder="Email" 
                        className={styles.input} 
                        onChange={handleEmailChange}
                        value={user.email}/>
                    </div>
                    <div>
                        <input type="password" 
                        name="password" id="password" 
                        placeholder="Password" 
                        className={styles.input} 
                        onChange={handlePasswordChange}
                        value={user.password}/>
                    </div>
                    {errorMessage && <div>{errorMessage}</div>}
                    <button type="submit" className={styles.button}>Login</button>
                </form>
            </div>
        </div>
     );
}
 
export default LoginPage;