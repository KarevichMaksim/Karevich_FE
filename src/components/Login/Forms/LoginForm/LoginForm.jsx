import './LoginForm.scss';

export function LoginForm() {
    return (
        <form className='login-form' autoComplete='off'>
            <label className='login-form__name-label' htmlFor="email">Login to your account</label>
            <input className='login-form__input' placeholder='Email' id='email' type="text"/>
            <input className='login-form__input' placeholder='Password' type="password"/>
            <button className='login-form__btn'>Login</button>
        </form>
    )
}