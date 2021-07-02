import './Search.scss'

export function Search() {
    return (
        <section className='search'>
            <div className='search__btn'>
                <i className="fas fa-bars"/>
            </div>
            <form className='search-form'>
                <input placeholder='Search' className='search-form__input' type="text"/>
                <button className='search-form__btn'><i className="fas fa-search"/></button>
            </form>
        </section>
    )
}