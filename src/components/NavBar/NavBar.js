import React, {Component} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

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
                <NavbarToggler right onClick={this.navBarToggle}/>
                <NavbarBrand href="/">reactstrap</NavbarBrand>
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/components/">Components</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">Github</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }

}

export default NavBar;
