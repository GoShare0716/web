import './AttendButton.css';

import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';
import React, {Component} from 'react';

import {attendWorkshop} from '../../actions/workshop';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {history} from '../../utils';
import {unauthenticated} from '../../actions/auth';





class AttendButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false
        };

        this.modalToggle = this.modalToggle.bind(this);
        this.onAttendClick = this.onAttendClick.bind(this);
        this.onCancelClick = this.onCancelClick.bind(this);
    }

    render() {
        const {
            auth,
            unauthenticated,
            id,
            phase,
            attended,
            canceled,
            friends,
            attendWorkshop
        } = this.props;
        let buttonText,
            buttonColor,
            buttonDisabled;

        if (attended) {
            buttonText = '報名成功';
            buttonColor = 'success';
            buttonDisabled = false;
        } else {
            if (canceled) {
                buttonText = '已取消報名';
                buttonColor = 'danger';
                buttonDisabled = true;
            } else {
                switch (phase) {
                    case 'judging':
                        buttonText = '審核中';
                        buttonColor = 'info';
                        buttonDisabled = true;
                        break;
                    case 'judge_na':
                        buttonText = '未通過';
                        buttonColor = 'danger';
                        buttonDisabled = true;
                        break;
                    case 'over':
                        buttonText = '已結束';
                        buttonColor = 'info';
                        buttonDisabled = true;
                        break;
                    case 'closing':
                        buttonText = '報名截止';
                        buttonColor = 'warning';
                        buttonDisabled = true;
                        break;
                    case 'full':
                        buttonText = '已額滿';
                        buttonColor = 'warning';
                        buttonDisabled = true;
                        break;
                    case 'unreached':
                        buttonText = '未達標';
                        buttonColor = 'info';
                        buttonDisabled = true;
                        break;
                    case 'investigating':
                    case 'reached':
                        buttonText = '我要報名';
                        buttonColor = 'primary';
                        buttonDisabled = false;
                        break;
                    default:
                }
            }
        }

        return (
            <div>
                <Button size="lg" block disabled={buttonDisabled} color={buttonColor} onClick={() => this.onAttendClick(auth, unauthenticated, attended, canceled, attendWorkshop, id)}>{buttonText}</Button>
                <div className="attend-button">
                    {!attended && <div className="attend-button-attendees">
                        {friends.slice(0, Math.min(3, friends.length)).map((f, i) => <img key={i} src={f.thumbnailUrl} alt=""/>)}
                    </div>}
                    {(phase === 'investigating' || phase === 'closing' || phase === 'full' || phase === 'reached') && attended && !canceled && <span className="link" onClick={this.modalToggle}>取消報名</span>}
                </div>
                <Modal isOpen={this.state.isModalOpen} toggle={this.modalToggle}>
                    <ModalHeader>取消報名</ModalHeader>
                    <ModalBody>
                        注意：取消報名後就無法再報名。
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.modalToggle}>再考慮一下</Button>
                        <Button color="danger" onClick={() => this.onCancelClick(attendWorkshop, id)}>取消報名</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }

    onAttendClick(auth, unauthenticated, attended, canceled, attendWorkshop, id) {
        if (auth.authenticated) {
            if (!attended) {
                attendWorkshop(id);
                history.push(`#workshop-attend`);
            } else if (!canceled) {
                history.push(`#workshop-attend`);
            }
        } else {
            unauthenticated(false);
        }
    }

    modalToggle() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    onCancelClick(attendWorkshop, id) {
        attendWorkshop(id);
        this.modalToggle();
    }
}

function mapStateToProps({auth}) {
    return {auth};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        unauthenticated,
        attendWorkshop
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AttendButton);
