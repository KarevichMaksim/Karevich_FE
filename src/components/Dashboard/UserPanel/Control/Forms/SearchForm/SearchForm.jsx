import './SearchForm.scss';

export function SearchForm(){
    return (
        <form className='form-search'>
            <input type="search" placeholder='Username' className='form-search__input'/>
            <button className='form-search__btn'><i className="fas fa-search" /></button>
        </form>
    )
}