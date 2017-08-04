import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {facebookLogin, facebookLogout} from '../../actions/auth';

import {
    NavItem,
    NavLink,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Button
} from 'reactstrap';
import './NavBarAuth.css';

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
                <div>
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
                        <NavLink href="" onClick={facebookLogout}>登出</NavLink>
                    </NavItem>
                </div>
            );
        }
        return (
            <div>
                <NavItem className="hidden-xs-down">
                    <Button color="primary" onClick={facebookLogin}>登入</Button>
                </NavItem>
                <NavItem className="hidden-sm-up">
                    <NavLink href="" onClick={facebookLogin}>登入</NavLink>
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
