import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import Product from './Pages/Product'
import Navagation from './components/Navagation'
import ProductDetails from './Pages/ProductDetails'
import { Container, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import FadeLoader from 'react-spinners/FadeLoader'
import axios from 'axios'
import { LINK } from './API_LINK/API_LINK'
import Cart from './Pages/Cart'
import Banner from './Pages/Banner'


function App() {

  const dispatch = useDispatch();
  const [loader, setLoader] = useState(true)

  useEffect(() => {

    axios.get(LINK).then((res) => {
      dispatch({
        type: "ADD_CART_DATA",
        payload: res.data
      });

      setTimeout(() => {
        setLoader(false)
      }, []);

    }).catch((err) => {
      console.log(err, "ERROR");
    })

  }, [])

  return (
    <>
      {loader === true ? <div className='App'><FadeLoader /></div> : <div className='bg-blue' >
        <Container >
          <Router>
            <Navagation />
            <Switch>
              <Route path='/' exact>
                <Banner />
              </Route>
              <Route path='/product' exact>
                <Product />
              </Route>
              <Route path='/details/:id' exact>
                <ProductDetails />
              </Route>
              <Route exact path='/cart'>
                <Cart />
              </Route>
              <Route exact path='/404'>
                <h1 style={{
                  color:'red',
                  marginTop:'15%',
                  textAlign:'center',
                  fontWeight:'bold',
                  fontSize:'200px'
                }}>404</h1>
              </Route>
              <Redirect to='/404' />
            </Switch>
          </Router>
        </Container>
      </div>}
    </>
  )
}

export default App
