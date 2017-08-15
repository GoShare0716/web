import './AttendedJumbotron.css'

import React, { Component } from 'react';

import AttendButton from './AttendButton';
import {Jumbotron} from 'reactstrap';



class AttendedJumbotron extends Component {

    render() {
        return (
            <Jumbotron className="attended-jumbotron">
                <div className="announcement">
                    <h3>注意事項</h3>
                    <ol>
                        <li>人數在 7 天內達標才會開課，歡迎分享給有興趣參加的同學。</li>
                        <li>若沒有達標，將以 Email 通知參加者。</li>
                        <li>若臨時無法參與工作坊，請儘早取消報名！</li>
                        <li>取消報名後，無法再次報名。</li>
                        <li>報名成功後，請填寫課前調查，以供講師安排工作坊內容。</li>
                    </ol>
                </div>
                <div className="attended-msg">
                    <h3>行前通知</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <AttendButton {...this.props}/>
            </Jumbotron>
        );
    }

}

export default AttendedJumbotron;
