import {SearchForm} from "./Forms/SearchForm/SearchForm";
import {UserCreateForm} from "./Forms/UserCreateForm/UserCreateForm";
import {useState} from "react";

import './Control.scss'
import {UserDeleteForm} from "./Forms/UserDeleteForm/UserDeleteForm";

export function Control() {
    const [createUser, setCreateUser] = useState(false);
    const [deleteUser, setDeleteUser] = useState(false);

    const handleClickCreateUser = () => setCreateUser(true);
    const handleClickDeleteUser = () => setDeleteUser(true);
    const handleClickCancel = () => {
        setCreateUser(false);
        setDeleteUser(false);
    };

    return (
        <div className='control'>
            <div>
                <button className='control__btn-create btn' onClick={handleClickCreateUser}>Create User</button>
                <button className='control__btn-delete btn' onClick={handleClickDeleteUser}>Delete Inactive Users
                </button>
            </div>
            <UserCreateForm createUser={createUser} onClickCancel={handleClickCancel}/>
            <UserDeleteForm deleteUser={deleteUser} onClickCancel={handleClickCancel}/>
            <SearchForm/>
            <div className='control__results'>
                Results
                <select className='control__select' name="results" id="results">
                    <option>15</option>
                    <option>10</option>
                    <option>5</option>
                </select>
            </div>
        </div>
    )
}