import classNames from "classnames/bind";

export function UserColumn({username, email, status, company}) {
    const statusClass = classNames('table__column',{'user': status === 'user'},{'stopped': status === 'stopped'},{'admin': status === 'admin'});

    return (
        <tr>
            <td className='table__column'>{username}</td>
            <td className='table__column'>{company}</td>
            <td className={statusClass}>{status}</td>
            <td className='table__column'>{email}</td>
        </tr>
    )
}