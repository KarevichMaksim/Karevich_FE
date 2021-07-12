import './Table.scss';
import {UserColumn} from "./UserColumn/UserColumn";

const users = [{company:'React LTD', status: 'stopped', email: 'react@email.com', payment: 'true' , username:'John'},
    {company:'Angular LTD', status: 'user', email: 'angular@email.com', payment: 'false',username:'Den'},
    {company:null, status: 'admin', email: 'admin@email.com', payment: null, username:'Mike'}]

export function Table() {
    return (
        <table className='table'>
            <thead>
            <tr>
                <th className='table__row'>Username</th>
                <th className='table__row'>Company</th>
                <th className='table__row'>Status</th>
                <th className='table__row'>E-mail</th>
            </tr>
            </thead>
            <tbody>
            {users.map(user=><UserColumn key={user.email} {...user}/>)}
            </tbody>
        </table>
    )
}