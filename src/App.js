import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./index.css"
import Home from './Home'
import {Switch,Route, Redirect} from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Service from './Service'
import Navbar from './Navbar'
import Common from './Common'
import Footer from './Footer'


const App = () => {
  return(
    <>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/" component ={Home}/>
        <Route exact path="/about" component ={About}/>
        <Route exact path="/service" component ={Service}/>
        <Route exact path="/contact" component ={Contact}/>
        <Redirect to="/" />
      </Switch>
      <Footer></Footer>
    </>
  );
}

export default App;
