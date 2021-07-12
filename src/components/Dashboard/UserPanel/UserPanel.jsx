import {Table} from "../Table/Table";

import './UserPanel.scss';
import {Paginate} from "./Paginate/Paginate";
import {Control} from "./Control/Control";

export function UserPanel() {
    return (
        <div className='user-panel'>
            <Control />
            <Table />
            <Paginate />
        </div>
    )
}