import './NavBarAlert.css';

import React, {Component} from 'react';

import {Alert} from 'reactstrap';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {hideAlert} from '../../actions/alert';




class NavBarAlert extends Component {
    render() {
        let {msg, type, isOpen} = this.props.alert;
        return <Alert className="nav-bar-alert" color={type} isOpen={isOpen} toggle={() => this.props.hideAlert()}>{msg}</Alert>;
    }
}

function mapStateToProps({alert}) {
    return {alert}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        hideAlert
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBarAlert);
