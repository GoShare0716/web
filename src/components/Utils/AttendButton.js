import './AttendButton.css';

import React, {Component} from 'react';

import {Button} from 'reactstrap';
import {history} from '../../utils';



class AttendButton extends Component {
    static defaultProps = {
        id: 2,
        phase: 'investigating',
        attended: false,
        canceled: false,
        returned: false,
        attendees: {
            friends: [],
            number: 0
        }
    };

    constructor(props) {
        super(props);
        this.onClickButton = this.onClickButton.bind(this);
    }

    onClickButton() {
        history.push(`#workshop-attend`);
    }

    renderAttendeesAvatar(friends) {
        return friends.slice(0, Math.min(3, friends.length)).map((f, i) => <img key={i} src={f.thumbnailUrl} alt=""/>);
    }

    render() {
        const {phase, attended, canceled, returned, attendees: {
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
                    if (canceled) {
                        buttonText = '已取消報名';
                        buttonColor = 'danger';
                        disabled = true;
                    } else {
                        if (returned) {
                            buttonText = '返回工作坊';
                        } else {
                            buttonText = '報名成功';
                        }
                        buttonColor = 'success';
                        disabled = false;
                    }
                } else {
                    buttonText = '我要報名';
                    buttonColor = 'primary';
                    disabled = false;
                }
        }

        return (
            <div>
                <Button size="lg" block disabled={disabled} color={buttonColor} onClick={this.onClickButton}>{buttonText}</Button>
                <div className="d-flex justify-content-between align-items-center">
                    <span className="link">運作機制</span>
                    {!attended && <div className="d-flex align-items-center attend-button-attendees">{this.renderAttendeesAvatar(friends)}</div>}
                    {(phase === 'investigating' || phase === 'reached') && attended && !canceled && <span className="link">取消報名</span>}
                </div>
            </div>
        );
    }
}

export default AttendButton;
