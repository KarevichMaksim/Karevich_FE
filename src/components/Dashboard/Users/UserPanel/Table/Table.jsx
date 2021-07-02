import './Table.scss';

export function Table() {
    return (
        <div className='table'>
            <h4 className='table__title'>User's Table</h4>
            <div className='table__show-count'>
                Show
                <select name="user-count" id="user-count">
                    <option>15</option>
                    <option>10</option>
                    <option>5</option>
                </select>
                entries
            </div>
            <table className='table__container'>
                <thead>
                <tr>
                    <th className='table__row'>Username</th>
                    <th className='table__row'>Status</th>
                    <th className='table__row'>E-mail</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td className='table__column'>Angular LTD</td>
                    <td className='table__column'>stopped</td>
                    <td className='table__column'>email@example.com</td>
                </tr>
                <tr>
                    <td className='table__column'>React LTD</td>
                    <td className='table__column'>user</td>
                    <td className='table__column'>email@example.com</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}