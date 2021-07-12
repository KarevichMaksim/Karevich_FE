import {Link} from "react-router-dom";

import './Navigation.scss';

export function Navigation(){
    return (
        <nav className='dashboard-nav'>
            <ul className='dashboard-nav__list'>
                <li className="dashboard-nav__item"><Link to='/dashboard'><i
                    className="fas fa-users-cog"/> Dashboard</Link></li>
            </ul>
        </nav>
    )
}