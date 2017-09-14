import './LoginModal.css';

import {Button, Modal, ModalBody} from 'reactstrap';
import React, {Component} from 'react';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {facebookLogin} from '../../actions/auth';
import {history} from '../../utils/history';

class LoginModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: true
        };

        this.modalToggle = this.modalToggle.bind(this);
    }

    modalToggle() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    render() {
        return (
            <Modal isOpen={this.state.isModalOpen} toggle={this.modalToggle} backdrop="static">
                <ModalBody className="login-modal-body">
                    <img className="mt-3 mb-4" src={`${process.env.PUBLIC_URL}/assets/brand/logo.png`} width="100" alt=""/>
                    <Button color="primary" block onClick={this.props.facebookLogin}>以 Facebook 登入</Button>
                    <Button color="secondary" block onClick={() => history.push('/')}>取消</Button>
                </ModalBody>
            </Modal>
        );
    }

}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        facebookLogin
    }, dispatch);
}

export default connect(null, mapDispatchToProps)(LoginModal);
