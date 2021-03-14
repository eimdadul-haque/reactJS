import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './Pages/Home'
import Srvices from './Pages/Srvices'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Notfound from './Pages/Notfound'
import { colors } from '@material-ui/core'

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path={'/'}>
            <Home />
          </Route>
          <Route exact path={'/Services'}>
            <Srvices />
          </Route>
          <Route exact path={'/About'}>
            <About />
          </Route>
          <Route exact path={'/Contact'}>
            <Contact />
          </Route>
          <Route exact path={'/404'}>
            <h1 style={{
                background: 'transparent',
                marginTop: '150px',
                marginLeft: '550px',
                color: 'black'
            }}>
              Page Not Found
            </h1>
          </Route>
          <Redirect to="/404" />
        </Switch>
      </Router>
    </div>
  )
}

export default App
