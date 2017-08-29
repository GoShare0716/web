/*global Typed*/
import './LandingPage.css';

import React, {Component} from 'react';

import {Col} from 'reactstrap';
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
                            <p className="lead mb-0">看似平凡的問句，卻有著讓人傾囊相授的魔力。但這句話大多出現在教室中、課業上和認識的人之間，為了滿足你對未知世界的好奇心，<mark>共學</mark>應運而生。</p>
                        </div>
                    </div>
                    <div className="landing-page-item">
                        <h2 className="text-center">HOW</h2>
                        <hr className="w-100"/>
                        <div className="landing-page-step">
                            <Col className="landing-page-step-text-container" xs={12} sm={6}>
                                <div className="landing-page-step-text">
                                    <h3>#1 技能票選</h3>
                                    <p className="lead">每兩周在 <a href="">FB 社團</a>票選大家最想學的技能，主動向懂的人求助。</p>
                                </div>
                            </Col>
                            <Col className="landing-page-step-image-container" xs={12} sm={6}>
                                <div className="landing-page-step-image" style={{
                                    backgroundImage: 'url(http://i.imgur.com/tHvD8uD.jpg)'
                                }}></div>
                            </Col>
                        </div>
                        <div className="landing-page-step reverse">
                            <Col className="landing-page-step-text-container reverse" xs={12} sm={6}>
                                <div className="landing-page-step-text">
                                    <h3>#2 徵求講者</h3>
                                    <p className="lead">徵求願意分享的人<Link to={`/create-workshop`}>成為講者</Link>，滿足學生的求知慾。也歡迎大家<a href="https://www.messenger.com/t/goshare0716" target="_blank" rel="noopener noreferrer">推薦</a>和<Link to={`/create-workshop`}>自薦</Link>。</p>
                                </div>
                            </Col>
                            <Col className="landing-page-step-image-container" xs={12} sm={6}>
                                <div className="landing-page-step-image" style={{
                                    backgroundImage: 'url(http://i.imgur.com/cGEOmUL.png)'
                                }}></div>
                            </Col>
                        </div>
                        <div className="landing-page-step">
                            <Col className="landing-page-step-text-container" xs={12} sm={6}>
                                <div className="landing-page-step-text">
                                    <h3>#3 募資期間</h3>
                                    <p className="lead">發布工作坊大綱，調查參加人數及學生需求。邀請朋友來參加，讓工作坊順利達標！</p>
                                </div>
                                </Col>
                                <Col className="landing-page-step-image-container" xs={12} sm={6}>
                                <div className="landing-page-step-image" style={{
                                    backgroundImage: 'url(http://i.imgur.com/ILhq0vt.jpg)'
                                }}></div>
                            </Col>
                        </div>
                        <div className="landing-page-step reverse">
                            <Col className="landing-page-step-text-container reverse" xs={12} sm={6}>
                                <div className="landing-page-step-text">
                                    <h3>#4 募資成功</h3>
                                    <p className="lead">確定舉辦工作坊！講者開始準備工作坊內容。若時限內未達標，則會取消工作坊。</p>
                                </div>
                                </Col>
                                <Col className="landing-page-step-image-container" xs={12} sm={6}>
                                <div className="landing-page-step-image" style={{
                                    backgroundImage: 'url(http://i.imgur.com/GQmhYii.jpg)'
                                }}></div>
                            </Col>
                        </div>
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
