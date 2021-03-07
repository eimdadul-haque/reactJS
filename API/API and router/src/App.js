import Product from './components/products'
import NavBar from './components/NavBar'
import CreatePro from './components/CreateProduct'
import Edit from './components/Edit'
import P404 from './components/P404'
import axios from 'axios'
import ProductD from './components/Product_drtails'
import React, { useState, useEffect } from 'react'
import Loader from 'react-spinners/FadeLoader'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {

    var components = [];
    const [Data, setdata] = useState([])
    const [loading, setloading] = useState(true)

    //if this fake api not work, I have a simple api. Folder name "JSON-Offline-Fake API" 
    //please read the READ ME.txt

    //http://localhost:3000/products/
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/`).then((res) => {
            var data = res.data;
            setdata(data)
            setTimeout(() => {
                setloading(false)
            }, []);

        }).catch((err) => {
            console.log(err, "ERROR");
        })
    }, [])


    for (let index = 0; index < Data.length; index++) {
        components.push(
            <div key={index} ><Product Value={index} /> </div>
        )
    }
    return (
        <>


            {loading ? <div className='App'><Loader /></div> :

                <div className='container-fluid'>
                    <Router>
                        <NavBar /><div className='row'>
                            <div className='col-4'></div>
                            <div className='col-4'>
                                <Switch>
                                    <Route exact path={'/'}>
                                        {components}
                                    </Route>
                                    <Route exact path={'/details/:id'}>
                                        <ProductD />
                                    </Route>
                                    <Route exact path={'/create_product'}>
                                        <CreatePro />
                                    </Route>
                                    <Route exact path={'/edit/:id'}>
                                        <Edit />
                                    </Route>
                                    <Route to={'/404'}>
                                        <P404 />
                                    </Route>
                                </Switch>
                            </div>
                        </div>
                    </Router>
                </div>}


        </>
    );
}

export default App;


