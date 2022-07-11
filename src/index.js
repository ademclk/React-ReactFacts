import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function PageComponent() {
  return (
    <div>
    <img src={require('./react-logo.png')} alt='' width="60px"/>
    <h1>Fun facts about React</h1>
    <ul>
      <li>Was first released in 2013</li>
      <li>Was originally created by Jordan Walke</li>
      <li>Is maintained by Facebook</li>
      <li>Is used by over 1.5 million developers</li>
      <li>Has well over 100k stars on Github</li>
      <li>Powers thousands of enterprise apps, including mobile apps</li>
    </ul>
  </div>
  )
}

ReactDOM.render(<PageComponent />, document.getElementById('root'));