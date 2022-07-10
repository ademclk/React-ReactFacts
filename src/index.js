import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const page = (
  <div>
    <h1>Trying React</h1>
    <h4>Why I love React?</h4>
    <ul>
      <li>It's composable.</li>
      <li>It's declarative.</li>
      <li>It's fun to code.</li>
    </ul>
  </div>
)

ReactDOM.render(page, document.getElementById('root'));