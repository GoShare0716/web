import React, {Component} from 'react';
import {history} from '../utils';
import {Router, Route} from 'react-router-dom';

import NavBar from './NavBar/NavBar';
import SkillList from './Skill/SkillList';
import WorkshopCreate from './Workshop/WorkshopCreate';
import WorkshopList from './Workshop/WorkshopList';
import Workshop from './Workshop/Workshop';
import WorkshopUpdate from './Workshop/WorkshopUpdate';
import WorkshopManage from './Workshop/WorkshopManage';
import User from './User/User';

import './App.css';

class App extends Component {
    render() {
        return (
            <Router history={history}>
                <div>
                    <NavBar/>
                    <div className="full">
                        <Route exact path="/" component={WorkshopList}/>
                        <Route path="/skill" component={SkillList}/>
                        <Route exact path="/create-workshop" component={WorkshopCreate}/>
                        <Route exact path="/workshop" component={WorkshopList}/>
                        <Route exact path="/workshop/:id" component={Workshop}/>
                        <Route exact path="/workshop/:id/manage" component={WorkshopManage}/>
                        <Route exact path="/workshop/:id/update" component={WorkshopUpdate}/>
                        <Route exact path="/user/me" component={User}/>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
