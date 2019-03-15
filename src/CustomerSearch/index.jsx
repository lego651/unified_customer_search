import React, { Component } from 'react';

import CustomerTable from '../CustomerTable'
import './style.css'

class CustomerSearch extends Component {
  constructor(){
    super()

    this.state = {
      searchContent: ''
    }
  }

  handleChange(e) {
    this.setState({
      searchContent: e.target.value
    })
  }
  render(){
    // db = this.props.db
    // console.log(this.props.db[0])
    let customers = this.props.db
    let searchContent = this.state.searchContent.trim().toLowerCase()
    if(searchContent.length > 0){
      customers = customers.filter(function(customer){
        return customer.name.toLowerCase().match(searchContent)
            || customer.id.toLowerCase().match(searchContent)
            || customer.age.toLowerCase().match(searchContent)
            || customer.location.toLowerCase().match(searchContent)
            || customer.gender.toLowerCase().match(searchContent)
            || customer.income.toLowerCase().match(searchContent)
      })
    }
    return(
      <div className="customer-search-wrapper">
        <h1> Unified Customer Search </h1>
        <input type="text"
               value={this.state.searchContent}
               onChange={(e) => {this.handleChange(e)}}
               placeholder="Search..." />
        <div className="search-result">
          {
            customers.map(function(customer, i){
              return <CustomerTable customerInfo={customer} key={i} />
            })
          }
        </div>
      </div>
    )
  }
}

export default CustomerSearch
