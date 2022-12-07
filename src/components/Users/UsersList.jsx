import * as React from 'react';
import data from '../../data.json'
import { Link } from 'react-router-dom';

export default function UsersList() {
  return (
    <div className='user-list' >
      <table className='users-table' >
        <thead className='users-head' >
          <tr>
            <th >Developer_Name</th>
            <th >Skills</th>
            <th >Experience</th>
            <th >Vendor</th>
          </tr>
        </thead>
        <tbody className='users-body'>
          {data.map((row) => (
              <tr
              key={row.Id}
              className="data-row"
            >
              <td>
                <Link className='user-name'to={`user/${row.Id}`} >{row.Developer_Name}</Link>
              </td>
              <td >{row.Skills}</td>
              <td >{row.Experience}</td>
              <td >{row.Vendor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}