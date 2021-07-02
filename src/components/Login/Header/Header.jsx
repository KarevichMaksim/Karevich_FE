import './Header.scss'

export  function Header(){
    return (
        <header className='logo'>
            <img className='logo__img' src="https://www.geoptimise.net/images/geoptimise_flat.png"
                 alt="Company's logo"/>
            <p className='logo__description'>Find more of your best customers.</p>
        </header>
    )
}