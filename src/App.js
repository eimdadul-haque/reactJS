import React from 'react';
import MyComponents from './Components/MyComponents.jsx';
import { useState } from 'react'


function App() {



  const [state, setstate] = useState('Welcome');

  const btn_clicked = (value) => {
    setstate(value);
  }

  return (
    <>
      <ul>
        <li>
          <button onClick={() => btn_clicked('Welcome to Home page')} className="btn">Home</button>
          <button onClick={() => btn_clicked('Welcome to Contact page')} className="btn">Contact</button>
        </li>
      </ul>
    <div>
      <MyComponents value={state}/>
    </div>
    </>
  );
}

export default App;
