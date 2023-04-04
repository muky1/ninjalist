import Footer from "./Footer";
import Navbar from "./Navbar";
import { isLoggedInState } from "./atoms/isLoggedInState";
import { useRecoilValue } from "recoil";
import LoginPage from "@/pages/auth";

const Layout = ({ children }: any) => {
    const isLoggedIn = useRecoilValue(isLoggedInState);

    return (
        <div>{isLoggedIn ? (
            <div className="content">
            <Navbar/>
            { children }
            <Footer/>
        </div>
        ) : <LoginPage/> }</div> 
        
     );
}
 
export default Layout;
