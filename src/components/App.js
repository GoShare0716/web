import React, {Component} from 'react';
import NavBar from './NavBar/NavBar';
import SkillList from './Skill/SkillList';
import WorkshopList from './Workshop/WorkshopList';
import Workshop from './Workshop/Workshop';
import WorkshopCreate from './Workshop/WorkshopCreate';
import WorkshopUpdate from './Workshop/WorkshopUpdate';
import WorkshopManage from './Workshop/WorkshopManage';
import User from './User/User';
import './App.css';

class App extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <div className="full">
                    <SkillList/>
                </div>
            </div>
        );
    }
}

export default App;
