import React, { Component } from 'react';
import AttendedJumbotron from '../Utils/AttendedJumbotron';

class WorkshopAttended extends Component {
    static defaultProps = {
        id: 2,
        attended: false,
        canceled: false,
        returned: false
    };

    render() {
        const {id, attended, canceled} = this.props;
        return (
            <div className="inner">
                <h1 className="mt-5 mb-3">謝謝您報名 0 基礎網頁設計工作坊</h1>
                <AttendedJumbotron id={id} attended={attended} canceled={canceled} returned/>
            </div>
        );
    }
}

export default WorkshopAttended;
