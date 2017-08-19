import './NavBarAuth.css';

import {
    Button,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    NavItem,
    NavLink
} from 'reactstrap';
import React, {Component} from 'react';
import {facebookLogin, facebookLogout} from '../../actions/auth';

import {Link} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';





class NavBarAuth extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        };

        this.dropdownToggle = this.dropdownToggle.bind(this);
    }

    dropdownToggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        const {facebookLogin, facebookLogout} = this.props;
        const {authenticated} = this.props.auth;
        if (authenticated) {
            return (
                <div className="nav-bar-auth">
                    <NavItem className="hidden-xs-down">
                        <Dropdown isOpen={this.state.isOpen} toggle={this.dropdownToggle}>
                            <DropdownToggle className="facebook-picture">
                                <img src={localStorage.getItem('thumbnailUrl')} alt="fb"/>
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem tag={Link} to='/user/me'>個人頁面</DropdownItem>
                                <DropdownItem onClick={facebookLogout}>登出</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </NavItem>
                    <NavItem className="hidden-sm-up">
                        <NavLink tag={Link} to='/user/me'>個人頁面</NavLink>
                    </NavItem>
                    <NavItem className="hidden-sm-up">
                        <span className="link nav-link" onClick={facebookLogout}>登出</span>
                    </NavItem>
                </div>
            );
        }
        return (
            <div>
                <NavItem className="ml-2 hidden-xs-down">
                    <Button color="primary" onClick={facebookLogin}>登入</Button>
                </NavItem>
                <NavItem className="hidden-sm-up">
                    <span className="link nav-link" onClick={facebookLogin}>登入</span>
                </NavItem>
            </div>
        );
    }

}

function mapStateToProps({auth}) {
    return {auth};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        facebookLogin,
        facebookLogout
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBarAuth);
