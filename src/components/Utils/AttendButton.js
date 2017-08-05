import React, {Component} from 'react';
import {Button} from 'reactstrap';

class AttendButton extends Component {
    static defaultProps = {
        id: 2,
        attended: false,
        canceled: false,
        returned: false
    };

    render() {
        const {attended, canceled, returned} = this.props;
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
            secondary = '張嘉軒、蔡欣蓓和其他 36 人會參加';
            cancel = '';
        }
        return (
            <div>
                <Button color="primary" size="lg" block disabled={disabled} color={color}>{primary}</Button>
                <div className="text-right">{secondary}<a href="">{cancel}</a></div>

            </div>
        );
    }

}

export default AttendButton;
