import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {Alert} from 'reactstrap';
import {hideAlert} from '../../actions/alert';

class NavBarAlert extends Component {
    render() {
        let {msg, type, isOpen} = this.props.alert;
        return <Alert color={type} isOpen={isOpen} toggle={() => this.props.hideAlert()}>{msg}</Alert>;
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
