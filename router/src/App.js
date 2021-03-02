import { useState, useEffect } from "react";
import Product from "./components/Product";
import ProductDetails from "./components/ProductDetails";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import FadeLoader from "react-spinners/FadeLoader";


function App() {

    const [loader, setloader] = useState(true)

    // For loding page & componentDidMount
    useEffect(() => {
        setTimeout(() => {
            setloader(false)
        }, 2000);
    }, [])


    return (<> {loader === true ? <div className='App'><FadeLoader /></div>  : <div className="row">
        <div className="col-4"></div>
        <div className="col-4">
            <Router>
                <ul>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/about'}>About</Link></li>
                </ul>


                <Switch>
                    <Route exact path={'/'}>
                        <Product value={0} />
                        <Product value={1} />
                        <Product value={2} />
                    </Route>
                    <Route exact path={'/details/:id'}>
                        <ProductDetails />
                    </Route>
                    <Route exact path={"/about"}>
                        <h1>About</h1>
                    </Route>
                    <Route path={'*'}>
                        <h1>404</h1>
                    </Route>

                </Switch>
            </Router>
        </div>
        <div className="col-4"></div>
    </div>}

    </>
    )
}

export default App;
