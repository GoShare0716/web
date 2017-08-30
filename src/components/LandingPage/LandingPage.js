/*global Typed*/
import './LandingPage.css';

import {Col, Row} from 'reactstrap';
import React, {Component} from 'react';

import {Link} from 'react-router-dom';




class LandingPage extends Component {
    componentDidMount() {
        this.typed = new Typed(".landing-page-heading", {
            strings: [
                '同學，可以教我畫畫嗎？', '同學，可以教我寫程式嗎？', '同學，可以教我打LOL嗎？', '同學，可以教我寫書法嗎？', '同學，可以教我電腦繪圖嗎？'
            ],
            typeSpeed: 100,
            startDelay: 1000,
            backSpeed: 100,
            smartBackspace: true,
            backDelay: 3000,
            cursorChar: '｜',
            loop: true
        });
    }

    render() {
        return (
            <div className="landing-page">
                <div className="landing-page-banner">
                    <h1><span className="landing-page-heading"/></h1>
                    <p className="lead mb-3">專為學生設計的工作坊募資平台</p>
                    <div className="landing-page-action">
                        <Link to={`/workshop`} className="btn btn-primary mr-2">看工作坊</Link>
                        <Link to={`/create-workshop`} className="btn btn-danger">成為講者</Link>
                    </div>
                </div>
                <div className="outer landing-page-content">
                    <div className="landing-page-item">
                        <h2 className="text-center">WHY</h2>
                        <hr className="w-100"/>
                        <div className="inner mx-auto pt-5">
                            <blockquote className="blockquote">
                                <p className="mb-0">「這裡我不太懂，可以教我嗎？」</p>
                            </blockquote>
                            <p className="lead mb-0">看似平凡的問句，卻有著讓人傾囊相授的魔力。共學希望透過工作坊募資，讓<mark>互相學習</mark>融入生活。</p>
                        </div>
                    </div>
                    <div className="landing-page-item">
                        <h2 className="text-center">HOW</h2>
                        <hr className="w-100"/>
                        <Row className="landing-page-phases mt-4">
                            <Col className="landing-page-phase" xs={12} md={6}>
                                <img src="http://i.imgur.com/tHvD8uD.jpg" alt=""/>
                                <h3 className="mt-3">#1 技能票選</h3>
                                <p className="text-center">每兩周在<a href="">FB 社團</a>票選大家最想學的技能</p>
                            </Col>
                            <Col className="landing-page-phase" xs={12} md={6}>
                                <img src="http://i.imgur.com/cGEOmUL.png" alt=""/>
                                <h3 className="mt-3">#2 徵求講者</h3>
                                <p className="text-center">根據票選結果徵求願意分享的人<Link to={`/create-workshop`}>成為講者</Link>
                                </p>
                            </Col>
                            <Col className="landing-page-phase" xs={12} md={6}>
                                <img src="http://i.imgur.com/ILhq0vt.jpg" alt=""/>
                                <h3 className="mt-3">#3 開始募資</h3>
                                <p className="text-center">講者公布工作坊大綱，調查參加人數及聽眾需求</p>
                            </Col>
                            <Col className="landing-page-phase" xs={12} md={6}>
                                <img src="http://i.imgur.com/GQmhYii.jpg" alt=""/>
                                <h3 className="mt-3">#4 募資成功</h3>
                                <p className="text-center">講者開始準備工作坊內容，未達標則取消工作坊</p>
                            </Col>
                        </Row>
                    </div>
                    <div className="landing-page-item">
                        <h2 className="text-center">專為學生</h2>
                        <hr className="w-100"/>
                        <Row className="landing-page-pros">
                            <Col xs={12} md={6} className="landing-page-pros-text-container">
                                <div className="landing-page-pros-text">
                                    <h3>想學而非必修</h3>
                                    <p>不論學校有沒有教、靜態動態、專業興趣，只要一定人數想學，我們就會找人滿足你的好奇心！</p>
                                </div>
                            </Col>
                            <Col xs={12} md={6} className="landing-page-pros-image-container">
                                <div className="landing-page-pros-image" style={{
                                    backgroundImage: 'url(http://www.ips.com.au/wp-content/uploads/2016/11/freedom-800x510.jpg)'
                                }}></div>
                            </Col>
                        </Row>
                        <Row className="landing-page-pros">
                            <Col xs={12} md={6} className="landing-page-pros-text-container reverse">
                                <div className="landing-page-pros-text">
                                    <h3>多元嘗試高 CP 值</h3>
                                    <p>工作坊會控制在三小時內。如果喜歡，未來可以繼續鑽研，不喜歡也不會浪費時間。</p>
                                </div>
                            </Col>
                            <Col xs={12} md={6} className="landing-page-pros-image-container reverse">
                                <div className="landing-page-pros-image" style={{
                                    backgroundImage: 'url(https://www.socialtalent.co/wp-content/uploads/2015/10/Diversity-Colouring-pencils.jpg)'
                                }}></div>
                            </Col>
                        </Row>
                        <Row className="landing-page-pros">
                            <Col xs={12} md={6} className="landing-page-pros-text-container">
                                <div className="landing-page-pros-text">
                                    <h3>建立跨領域人脈</h3>
                                    <p>除了充實的學習，我們也有安排交流時間，讓你和未來的朋友、同事、伴侶相遇。</p>
                                </div>
                            </Col>
                            <Col xs={12} md={6} className="landing-page-pros-image-container">
                                <div className="landing-page-pros-image" style={{
                                    backgroundImage: 'url(http://media.istockphoto.com/photos/abstract-network-connection-background-picture-id509731276?k=6&m=509731276&s=612x612&w=0&h=C8_3Gb8V7DHKZnO1BP-BHYKYfTvxxqJAM29OtvaC7Qs=)'
                                }}></div>
                            </Col>
                        </Row>
                        <Row className="landing-page-pros">
                            <Col xs={12} md={6} className="landing-page-pros-text-container reverse">
                                <div className="landing-page-pros-text">
                                    <h3>和朋友一起杜絕懶散</h3>
                                    <p>懶得出遠門？工作坊都在清大的公共空間，揪朋友一起來玩吧！</p>
                                </div>
                            </Col>
                            <Col xs={12} md={6} className="landing-page-pros-image-container reverse">
                                <div className="landing-page-pros-image" style={{
                                    backgroundImage: 'url(https://pixel.nymag.com/imgs/daily/science/2016/08/18/18-shared-memories.w710.h473.jpg)'
                                }}></div>
                            </Col>
                        </Row>
                    </div>
                </div>
                <div className="landing-page-footer">
                    <h2>滿足你的好奇心</h2>
                    <p className="lead mb-3">專為學生設計的工作坊募資平台</p>
                    <div className="landing-page-action">
                        <Link to={`/workshop`} className="btn btn-primary mr-2">看工作坊</Link>
                        <Link to={`/create-workshop`} className="btn btn-danger">成為講者</Link>
                    </div>
                </div>
            </div>
        );
    }

}

export default LandingPage;
