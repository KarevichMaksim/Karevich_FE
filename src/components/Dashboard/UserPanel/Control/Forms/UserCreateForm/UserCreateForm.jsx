import './UserCreateForm.scss'
import {useState} from "react";

export function UserCreateForm({createUser, onClickCancel}) {
    const [userRole, setUserRole] = useState(true);

    const handleToggleRole = () => setUserRole(!userRole);

    const toggleRole = userRole ? 'Admin' : 'User';
    const role = userRole ? 'User' : 'Admin';
    const controlUserCompany = userRole ?
        <>
            <label htmlFor="company" className='form-create__label'>Company</label>
            <input type="text" id='company' className='form-create__input'/>
        </>
        : null

    return (
        createUser && <>
            <div className='form-create__container'/>
            <form className='form-create'>
                <div className='form-create__toggle'><span className="form-create__toggle-line"/>
                    <span className="form-create__toggle-role" onClick={handleToggleRole}>{toggleRole}</span>
                </div>
                <div className='form-create__cancel'><i className="fas fa-times-circle" onClick={onClickCancel}/></div>
                <label htmlFor="email" className='form-create__label'>Email </label>
                <input type="text" id='email' className='form-create__input'/>
                <label htmlFor="username" className='form-create__label'>Username </label>
                <input type="text" id='username' className='form-create__input'/>
                {controlUserCompany}
                <button className='form-create__btn'>Create {role}</button>
            </form>
        </>
    )
}