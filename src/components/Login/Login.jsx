import './Login.scss';
import {LoginHeader} from "./Header/Header";
import {Footer} from "./Footer/Footer"
import {LoginMain} from "./Mains/LoginMain";
import Login from "../../styled/components/Login";

export function LoginPage() {
    return (
        <Login>
            <LoginHeader/>
            <LoginMain />
            <Footer/>
        </Login>
    )
}