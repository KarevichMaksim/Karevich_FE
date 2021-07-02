import {Link} from "react-router-dom";

import './Footer.scss'

export function Footer() {
    return (
        <footer className='footer'>
            <p className='footer__description'>2019 © <Link to='/'>Innovation Mapping Ltd</Link></p>
        </footer>
    )
}