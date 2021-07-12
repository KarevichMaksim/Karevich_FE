import './UserDeleteForm.scss';

export function UserDeleteForm({deleteUser, onClickCancel}){
    return (
        deleteUser && <>
            <div className='form-delete__container'/>
            <form className='form-delete'>
                <div className='form-delete__line'/>
                <div className='form-delete__cancel'><i className="fas fa-times-circle" onClick={onClickCancel}/></div>
                <p className='form-delete__text'>This action cannot be undone. This will permanently delete  DB.</p>
                <label htmlFor="email" className='form-delete__label'>Email </label>
                <input type="text" id='email' className='form-delete__input'/>
                <button className='form-delete__btn'>Delete User</button>
            </form>
        </>
    )
}