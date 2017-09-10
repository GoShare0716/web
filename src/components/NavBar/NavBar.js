import './NavBar.css';

import {
    Collapse,
    Nav,
    NavItem,
    NavLink,
    NavbarBrand,
    NavbarToggler
} from 'reactstrap';
import React, {Component} from 'react';

import {Link} from 'react-router-dom';
import NavBarAuth from './NavBarAuth';




class NavBar extends Component {
    constructor(props) {
        super(props);

        this.navBarToggle = this.navBarToggle.bind(this);
        this.navBarClose = this.navBarClose.bind(this);
        this.state = {
            isOpen: false
        };
    }

    navBarToggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    navBarClose() {
        this.setState({
            isOpen: false
        });
    }

    render() {
        const {pathname} = this.props.location;
        return (
            <nav className="nav-bar-container navbar fixed-top navbar-light navbar-toggleable">
                <div className="nav-bar">
                    <NavbarToggler right onClick={this.navBarToggle}/>
                    <NavbarBrand className="nav-bar-brand" onClick={this.navBarClose} tag={Link} to='/'>
                        <img src={process.env.PUBLIC_URL + '/assets/brand/logo.png'} height="32" alt=""/>
                        共學
                    </NavbarBrand>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink onClick={this.navBarClose} tag={Link} to='/workshop' active={pathname === '/workshop'}>工作坊募資</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink onClick={this.navBarClose} tag={Link} to='/vote' active={pathname === '/vote'}>主題票選</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink onClick={this.navBarClose} tag={Link} to='/create-workshop' active={pathname === '/create-workshop'}>成為講者</NavLink>
                            </NavItem>
                            <NavBarAuth onClick={this.navBarClose}/>
                        </Nav>
                    </Collapse>
                </div>
            </nav>

        );
    }

}

export default NavBar;
