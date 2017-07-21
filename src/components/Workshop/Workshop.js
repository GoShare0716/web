import React, {Component} from 'react';
import {Jumbotron, Button} from 'reactstrap';

import './Workshop.css'

export default class Workshop extends Component {
    render() {
        return (
            <div className="full workshop">
                <div className="inner workshop-author">
                    <img className="workshop-author-img" src="https://scontent-tpe1-1.xx.fbcdn.net/v/t31.0-8/14876496_1735976403393352_4070401399338628514_o.jpg?oh=0ff4f0965c69809a048ea68c7dfb5836&oe=59C71556" alt=""/>
                    <h4>賴詰凱</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, in impedit ut dolores sint facere. Deserunt beatae voluptate natus architecto suscipit deleniti provident labore laboriosam! Sunt deserunt velit odit, sapiente.</p>
                </div>
                <img className="w-100 banner" src="https://placeholdit.imgix.net/~text?w=1080&h=540" alt=""/>
                <div className="inner article">
                    <h1>開啟資料科學的學習大門 - R入門教學</h1>
                    <Jumbotron className="goal">
                        <h3>你將學會...</h3>
                        <ul>
                            <li>了解R語言的功能、發展與社群。</li>
                            <li>學習R的基本知識，撰寫出第一個R的程式，並且準備好學習R在進階分析的應用。</li>
                        </ul>
                        <Button className="btn-attend" color="primary" size="lg" block>我要報名</Button>
                    </Jumbotron>
                    <div className="requirement">
                        <h3>你需要具備...</h3>
                        <ul>
                            <li>一台電腦與穩定的網路連線。</li>
                            <li>課程將從基礎觀念開始帶同學入門了解R語言，沒有背景限制！</li>
                        </ul>
                    </div>
                    <div className="target-audience">
                        <h3>這堂課適合給...</h3>
                        <ul>
                            <li>沒有學過程式，想要上手R語言的準備進行資料分析的同學。</li>
                            <li>雖然學過R語言，知道如何用R跑分析，但是卻無法作到以下事情的同學：從分析結果中取得需要的資訊的同學；出錯就無法自行解決的同學；了解什麼是R的物件，並且取得對應的原始碼。</li>
                            <li>因應需求，要設計R語言課程的老師</li>
                        </ul>
                    </div>
                    <div className="info">
                        <h3>工作坊資訊</h3>
                        <ul>
                            <li>時間：2017-07-28(週五) 13:00 ~ 2017-11-06(週一) 17:00 (GMT+8)</li>
                            <li>地點：台北市中正區中山南路11號8樓 (張榮發國際會議中心 801會議廳)</li>
                            <li>費用：0 元</li>
                            <li>最低人數：10 人</li>
                            <li>最高人數：30 人</li>
                            <li>調查倒數：3 天</li>
                            <li>報名倒數：11 天</li>
                        </ul>
                    </div>
                    <div className="description">
                        <h3>簡介</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div className="content">
                        <h3>詳細介紹</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <Jumbotron className="attend">
                        <h3>報名注意事項</h3>
                        <ol>
                            <li>人數在 7 天內達標才會開課，歡迎分享給有興趣參加的同學。</li>
                            <li>若沒有達標，將以 Email 通知參加者。</li>
                            <li>若臨時無法參與工作坊，請儘早取消報名！</li>
                            <li>取消報名後，無法再次報名。</li>
                            <li>報名成功後，請填寫課前調查，以供講師安排工作坊內容。</li>
                        </ol>
                        <Button className="btn-attend" color="primary" size="lg" block>我要報名</Button>
                    </Jumbotron>
                </div>
            </div>
        );
    }
}
