import './App.css';

import React, {Component} from 'react';
import {Route, Router} from 'react-router-dom';

import Footer from './Footer/Footer';
import About from './About/About';
import NavBar from './NavBar/NavBar';
import NavBarAlert from './NavBar/NavBarAlert';
import User from './User/User';
import Workshop from './Workshop/Workshop';
import WorkshopCreate from './Workshop/WorkshopCreate';
import WorkshopList from './Workshop/WorkshopList';
import WorkshopManage from './Workshop/WorkshopManage';
import WorkshopUpdate from './Workshop/WorkshopUpdate';
import {history} from '../utils';

class App extends Component {
    render() {
        return (
            <Router history={history}>
                <div className="app d-flex flex-column">
                    <Route path="/" component={NavBar}/>
                    <NavBarAlert/>
                    <div className="full">
                        <Route exact path="/" component={WorkshopList}/>
                        <Route exact path="/about" component={About}/>
                        <Route exact path="/workshop" component={WorkshopList}/>
                        <Route exact path="/workshop/:id" component={Workshop}/>
                        <Route exact path="/workshop/:id/manage" component={WorkshopManage}/>
                        <Route exact path="/workshop/:id/update" component={WorkshopUpdate}/>
                        <Route exact path="/become-speaker" component={WorkshopCreate}/>
                        <Route exact path="/user/:id" component={User}/>
                        <Route exact path="/me" component={User}/>
                    </div>
                    <Footer/>
                </div>
            </Router>
        );
    }
}

export default App;
