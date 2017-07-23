import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

import './NavBar.css';

class NavBar extends Component {
    constructor(props) {
        super(props);

        this.navBarToggle = this.navBarToggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    navBarToggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <Navbar color="faded" light toggleable>
                <div className="nav-bar-container">
                    <NavbarToggler right onClick={this.navBarToggle}/>
                    <NavbarBrand tag={Link} to='/'>共學</NavbarBrand>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink tag={Link} to='/skill'>技能列表</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to='/workshop'>工作坊</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to='/workshop/create'>我要提案</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
        );
    }

}

export default NavBar;
