import './Dashboard.scss'
import {Link} from "react-router-dom";
import {Header} from "./Header/Header";
import {Search} from "./Search/Search";
import {UserInfo} from "./Users/UserInfo/UserInfo";
import {UserPanel} from "./Users/UserPanel/UserPanel";

export function Dashboard() {
    return (
        <div className='dashboard-container'>
            <Header/>
            <main className='dashboard'>
                <Search/>
                <UserInfo />
                <UserPanel />
            </main>
        </div>
    )
}