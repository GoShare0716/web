import React, {Component} from 'react';
import NavBar from './NavBar/NavBar';
import SkillList from './Skill/SkillList';
import WorkshopUpdate from './Workshop/WorkshopUpdate';
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
