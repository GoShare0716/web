import React, {Component} from 'react';

import {Button} from 'reactstrap';


class AttendButton extends Component {
    static defaultProps = {
        id: 2,
        attended: false,
        canceled: false,
        returned: false
    };

    renderAttendees({friends, number}) {
        switch (friends.length) {
            case 0:
                return `${number} 人會參加`;
            case 1:
                return (
                    <div>
                        <a href="/id">friends[0].name</a>
                        <span>{`和其他 ${number - 1} 人會參加`}</span>
                    </div>
                );
            default:
                return (
                    <div>
                        <a href="/id">{friends[0].name}</a>
                        <span>、</span>
                        <a href="/id">{friends[1].name}</a>
                        <span>{`和其他 ${number - 2} 人會參加`}</span>
                    </div>
                );
        }
    }

    render() {
        const {attended, canceled, returned, attendees} = this.props;
        let primary,
            secondary = '',
            color = 'primary',
            disabled = false,
            cancel = '取消報名';
        if (attended) {
            if (canceled) {
                primary = '已取消報名';
                color = 'danger';
                disabled = true;
                cancel = '';
            } else {
                if (returned) {
                    primary = '返回工作坊';
                } else {
                    primary = '報名成功';
                }
                color = 'success';
            }
        } else {
            primary = '我要報名';
            secondary = this.renderAttendees(attendees);
            cancel = '';
        }
        return (
            <div>
                <Button size="lg" block disabled={disabled} color={color}>{primary}</Button>
                <div className="text-right">{secondary}
                    <a href="">{cancel}</a>
                </div>
            </div>
        );
    }

}

export default AttendButton;
