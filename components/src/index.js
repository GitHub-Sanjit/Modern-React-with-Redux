import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div className="ui container comments">
      <div className='comment'>
        <a href="/" className='avatar'>
          <img src="" alt="avatar" />
        </a>
        <div className='content'>
          <a href="/" className='author'>
            <h3>Sam</h3>
          </a>
          <div className='metadata'>
            <span className='date'>Today at 6:00PM</span>
          </div>
          <div className='text'>Nice Blog Post!</div>
        </div>
      </div>
    </div>
  )
}

ReactDOM.render(<App></App>, document.querySelector('#root'));