import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {
    NavItem,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import './NavBarAuth.css';

class NavBarAuth extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
        };

        this.dropdownToggle = this.dropdownToggle.bind(this);
    }

    dropdownToggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <NavItem className="my-auto hidden-xs-down">
                <Dropdown isOpen={this.state.isOpen} toggle={this.dropdownToggle}>
                    <DropdownToggle className="facebook-picture">
                        <img src="https://scontent-tpe1-1.xx.fbcdn.net/v/t1.0-9/14907205_1735976403393352_4070401399338628514_n.jpg?oh=8e78a4702aab2048c89adf574c9fb43e&oe=5A020917" alt="fb"/>
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem tag={Link} to='/user/me'>個人頁面</DropdownItem>
                        <DropdownItem>登出</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </NavItem>
        );
    }

}

export default NavBarAuth;
