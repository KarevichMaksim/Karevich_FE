import './Dashboard.scss'
import {Header} from "./Header/Header";
import {UserPanel} from "./UserPanel/UserPanel";

export function Dashboard() {
    return (
        <div className='dashboard-container'>
            <Header/>
            <main className='dashboard'>
                <UserPanel />
            </main>
        </div>
    )
}