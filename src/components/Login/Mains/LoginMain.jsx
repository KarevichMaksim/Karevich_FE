import {useState} from "react";
import {ResetForm} from "../Forms/ResetForm/ResetForm";
import {LoginForm} from "../Forms/LoginForm/LoginForm";

export function LoginMain() {
    const [resetPassword, setResetPassword] = useState();

    const showToggle = resetPassword &&
        <div onClick={() => setResetPassword(false)} className='main__toggle'><i className="fas fa-pencil-alt"/>Login
        </div>;
    const passwordReset = !resetPassword &&
        <div onClick={() => setResetPassword(true)} className='main__reset-pass'>Forgot your password?</div>;

    const formControll = resetPassword ? <ResetForm/> : <LoginForm/>

    return (
        <main className='main'>
            {showToggle}
            {formControll}
            {passwordReset}
        </main>
    )
}