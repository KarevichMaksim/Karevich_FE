import './Login.scss';
import {Header} from "./Header/Header";
import {LoginForm} from "./Forms/LoginForm/LoginForm";
import {ResetForm} from "./Forms/ResetForm/ResetForm";
import {Footer} from "./Footer/Footer";
import {useState} from "react";

export function Login() {
    const [resetPassword, setResetPassword] = useState();

    const showToggle = resetPassword &&
        <div onClick={() => setResetPassword(false)} className='main__toggle'><i className="fas fa-pencil-alt" />Login
        </div>;
    const passwordReset = !resetPassword &&
        <div onClick={() => setResetPassword(true)} className='main__reset-pass'>Forgot your password?</div>;

    const formControll = resetPassword ? <ResetForm /> : <LoginForm/>

    return (
        <div className='container'>
            <Header/>
            <main className='main'>
                {showToggle}
                {formControll}
                {passwordReset}
            </main>
            <Footer/>
        </div>
    )
}