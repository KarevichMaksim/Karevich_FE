import './ResetForm.scss';

export function ResetForm() {
    return (
        <form className='login-form' autoComplete='off'>
            <label className='login-form__name-label' htmlFor="email">Reset Your Password</label>
            <input className='login-form__input' placeholder='Email' id='email' type="text"/>
            <button className='login-form__btn'>Send Password Reset Email</button>
        </form>
    )
}