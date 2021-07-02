import {Table} from "./Table/Table";
import {UsersManagment} from "./UsersManagment/UsersManagment";

import './UserPanel.scss';

export function UserPanel() {
    return (
        <section className='admin'>
            <h3 className='admin__title'>User Admin</h3>
            <div className='admin__wrapper'>
                <UsersManagment/>
                <Table/>
            </div>
        </section>
    )
}