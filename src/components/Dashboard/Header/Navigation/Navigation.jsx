import {Link} from "react-router-dom";

import './Navigation.scss';

export function Navigation(){
    return (
        <nav className='dashboard-nav'>
            <p className='dashboard-nav__text'>main</p>
            <ul className='dashboard-nav__list'>
                <li className="dashboard-nav__item"><Link to='/dashboard'><i
                    className="fas fa-users-cog"/> Dashboard</Link></li>
                <li className="dashboard-nav__item"><Link to='/dashboard/admin'><i
                    className="fas fa-user"/> User Admin</Link></li>
                <li className="dashboard-nav__item"><Link to='/dashboard/groups'><i
                    className="fas fa-user-friends"/> User Groups</Link></li>
                <li className="dashboard-nav__item"><Link to='/dashboard/logs'><i
                    className="fas fa-chart-bar"/> Logs</Link></li>
                <li className="dashboard-nav__item"><Link to='/dashboard/help'><i
                    className="fas fa-question"/> Help / Support</Link></li>
            </ul>
        </nav>
    )
}