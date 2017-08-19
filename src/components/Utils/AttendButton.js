import './AttendButton.css';

import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';
import React, {Component} from 'react';

import {attendWorkshop} from '../../actions/workshop';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {history} from '../../utils';
import {unauthenticated} from '../../actions/auth';





class AttendButton extends Component {
    static defaultProps = {
        id: 2,
        phase: 'investigating',
        attended: false,
        canceled: false,
        attendees: {
            friends: [],
            number: 0
        }
    };

    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false
        };

        this.modalToggle = this.modalToggle.bind(this);
        this.onAttendClick = this.onAttendClick.bind(this);
        this.onCancelClick = this.onCancelClick.bind(this);
    }

    modalToggle() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    onCancelClick(id) {        
        this.props.attendWorkshop(id);
        this.modalToggle();
    }

    onAttendClick() {
        const {
            auth,
            id,
            attended,
            canceled,
            attendWorkshop,
            unauthenticated
        } = this.props;
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

    renderAttendeesAvatar(friends) {
        return friends.slice(0, Math.min(3, friends.length)).map((f, i) => <img key={i} src={f.thumbnailUrl} alt=""/>);
    }

    render() {
        const {id, phase, attended, canceled, attendees: {
                friends
            }} = this.props;
        let buttonText,
            buttonColor,
            disabled;

        switch (phase) {
            case 'judging':
                buttonText = '審核中';
                buttonColor = 'info';
                disabled = true;
                break;
            case 'judge_na':
                buttonText = '審核失敗';
                buttonColor = 'danger';
                disabled = true;
                break;
            case 'over':
                buttonText = '已結束';
                buttonColor = 'info';
                disabled = true;
                break;
            case 'closing':
                buttonText = '報名截止';
                buttonColor = 'warning';
                disabled = true;
                break;
            case 'full':
                buttonText = '已額滿';
                buttonColor = 'warning';
                disabled = true;
                break;
            case 'unreached':
                buttonText = '未達標';
                buttonColor = 'info';
                disabled = true;
                break;
            default:
                if (attended) {
                    buttonText = '報名成功';
                    buttonColor = 'success';
                    disabled = false;
                } else {
                    if (canceled) {
                        buttonText = '已取消報名';
                        buttonColor = 'danger';
                        disabled = true;
                    } else {
                        buttonText = '我要報名';
                        buttonColor = 'primary';
                        disabled = false;
                    }
                }
        }

        return (
            <div>
                <Button size="lg" block disabled={disabled} color={buttonColor} onClick={this.onAttendClick}>{buttonText}</Button>
                <div className="d-flex justify-content-between align-items-center">
                    <span className="link">運作機制</span>
                    {!attended && <div className="d-flex align-items-center attend-button-attendees">{this.renderAttendeesAvatar(friends)}</div>}
                    {(phase === 'investigating' || phase === 'reached') && attended && !canceled && <span className="link" onClick={this.modalToggle}>取消報名</span>}
                </div>
                <Modal isOpen={this.state.isModalOpen} toggle={this.modalToggle}>
                    <ModalHeader>取消報名</ModalHeader>
                    <ModalBody>
                        注意：取消報名後就無法再報名。
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.modalToggle}>再考慮一下</Button>
                        <Button color="danger" onClick={e => this.onCancelClick(id)}>取消報名</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
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
