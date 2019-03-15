import React, { Component } from 'react';

import './style.css'

class CustomerTable extends Component {
  constructor(){
    super()
  }

  render(){
    let customer = this.props.customerInfo
    return(
      <div className="customer-table-row">
        <div className="customer-name"> {customer.name }</div>
        <table>
          <tbody>
            <tr>
              <th>Customer ID</th>
              <th>Age</th>
              <th>Location</th>
              <th>Gender</th>
              <th>Income</th>
            </tr>
            <tr>
              <td>{customer.id}</td>
              <td>{customer.age}</td>
              <td>{customer.location}</td>
              <td>{customer.gender}</td>
              <td>{customer.income}</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default CustomerTable
