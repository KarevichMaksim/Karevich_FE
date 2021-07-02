import {Navigation} from "./Navigation/Navigation";
import {Logo} from "./Logo/Logo";

import './Header.scss';

export function Header() {
    return (
        <header className='dashboard-header'>
            <Logo/>
            <Navigation/>
        </header>
    )
}