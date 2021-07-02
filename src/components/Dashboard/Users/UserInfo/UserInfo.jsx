import {Link} from "react-router-dom";

import './UserInfo.scss';

export function UserInfo() {
    return (
        <section className='user-info'>
            <h1 className='user-info__title'>User Admin</h1>
            <div className='user-info__nav'>
                <Link to='/' className='user-info__link'>Home</Link> /
                <Link to='/dashboard/admin' className='user-info__link_active'>User Admin</Link>
            </div>
        </section>
    )
}