import './Paginate.scss'
import {Page} from "./Page/Page";
import {useState} from "react";

export function Paginate() {
    const [activePage, setActivePage] = useState(1);

    const handleClickPage = (page) => setActivePage(page)

    return (
        <div className='paginate'>Page {[1, 2, 3, 4].map(page => <Page key={page} onPaginateClick={handleClickPage}
                                                                       activePage={activePage} page={page}/>)}</div>
    )
}