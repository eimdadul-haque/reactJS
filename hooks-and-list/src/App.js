import './App.css';
import React, { useState, useEffect } from 'react'
import Product from './components/Product_page'
import Product_detail from './components/Product_detail_page'
import Data from './Data/Data.json'


function App() {

  const [state, setState] = useState('product');
  let component = [];

  const click = (value) => {
    setState(value)
  }



  for (let index = 0; index < Data.length; index++) {
    component.push(<div onClick={() => click(index)}>
      <Product Name={Data[index].Name} Price={Data[index].Price} No={Data[index].No} />
      
    </div>)
  }

  return (
    <>
      <div className="container  ">
        <div className="row">
          <div className='col-4'></div>
          <div className='col-4'>
            <div className="text-center" >
              {state == 'product' ? component : <Product_detail No={Data[state].No} Name={Data[state].Name} Desc={Data[state].Description} Price={Data[state].Price} Cate={Data[state].Category} />}
            </div>
          </div>
          <div className='col-4'></div>
        </div>
      </div>
    </>
  )
}

export default App;
