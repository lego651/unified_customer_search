import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CustomerSearch from './CustomerSearch'
import * as serviceWorker from './serviceWorker';

const db = [
  {
    name: 'Jeremy Clarke',
    id: '12345',
    age: '21',
    location: 'San Jose',
    gender: 'Male',
    income: '$120,000'
  },
  {
    name: 'Metty Bing',
    id: '12225',
    age: '25',
    location: 'Fremont',
    gender: 'Female',
    income: '$950,000'
  },
  {
    name: 'Tanaya Smith',
    id: '12455',
    age: '18',
    location: 'New York City',
    gender: 'Female',
    income: '$160,000'
  },
  {
    name: 'Sparsh Saxena',
    id: '13345',
    age: '26',
    location: 'Philadephia',
    gender: 'Male',
    income: '$200,000'
  },
  {
    name: 'Philip Anderson',
    id: '13385',
    age: '32',
    location: 'Sunnyvale',
    gender: 'Male',
    income: '$280,000'
  }
]
const items = 'hehe'


ReactDOM.render(<CustomerSearch db = {db} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
