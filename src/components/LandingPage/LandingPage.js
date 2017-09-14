import './LandingPage.css';

import {Col, Row} from 'reactstrap';
import React, {Component} from 'react';

import {Link} from 'react-router-dom';
import SeeMore from '../Utils/SeeMore';

class LandingPage extends Component {
    render() {
        return (
            <div className="landing-page">
                <div className="landing-page-banner">
                    <h1>想學什麼？</h1>
                    <h1>共學幫你找老師！</h1>
                </div>
                <div className="inner py-5">
                    <div className="landing-page-item">
                        <h2 className="text-center">關於我們</h2>
                        <div className="mx-auto">
                            <p>共學是專為學生設計的工作坊募資平台，媒合好學與不藏私的學生。</p>
                            <p>在這裡，好奇心強的學生能找到適合的工作坊，學習新知；樂於分享的學生則能成為受愛戴的講者，展現才華。</p>
                        </div>
                    </div>
                    <div className="landing-page-item">
                        <h2 className="text-center">探索適合您的工作坊</h2>
                        <div className="mx-auto">
                            <p>為了讓工作坊更貼近學生需求，我們以群眾募資的方式發起工作坊：</p>
                            <h3>募資開始</h3>
                            <p>講者公布工作坊的時間、地點、大綱、報名費用，以及達標人數等資訊。<br/><Link to={`/workshop`}><i className="fa fa-arrow-circle-right" aria-hidden="true"> 馬上看正在募資的工作坊</i></Link></p>
                            <h3>募資期間</h3>
                            <SeeMore text={['享早鳥優惠；講者會與您在討論區交流，讓工作坊符合您的期待。']} more={['募資期間，您可以用較優惠的價錢購買早鳥票，募資成功後則恢復原價。', '您可以在討論區與講者交流，幫助講者了解您參加的動機和想學習的內容，讓工作坊更符合您的期待。', '當報名人數超過門檻時，即募資成功；否，則取消工作坊。']}/>
                            <h3>募資成功</h3>
                            <p>工作坊確定舉辦！在人數額滿、報名截止前都可以持續報名。工作坊當日，請準時出席並繳交報名費用。</p>
                        </div>
                    </div>
                </div>
                <div className="landing-page-footer">
                    <div className="outer">
                        <h2 className="text-center">快速入門</h2>
                        <Row className="justify-content-between mt-5">
                            <Col xs={12} md="auto" className="landing-page-step-container">
                                <div className="landing-page-step">
                                    <h3>瀏覽</h3>
                                    <p>在<Link to="/workshop">工作坊募資</Link>瀏覽工作坊</p>
                                </div>
                            </Col>
                            <Col xs={12} md="auto" className="landing-page-arrow-container">
                                <i className="fa fa-long-arrow-right fa-3x hidden-sm-down" aria-hidden="true"/>
                                <i className="fa fa-long-arrow-down fa-2x hidden-md-up my-3" aria-hidden="true"/>
                            </Col>
                            <Col xs={12} md="auto" className="landing-page-step-container">
                                <div className="landing-page-step">
                                    <h3>報名</h3>
                                    <p>選擇有興趣的工作坊報名</p>
                                </div>
                            </Col>
                            <Col xs={12} md="auto" className="landing-page-arrow-container">
                                <i className="fa fa-long-arrow-right fa-3x hidden-sm-down" aria-hidden="true"/>
                                <i className="fa fa-long-arrow-down fa-2x hidden-md-up my-3" aria-hidden="true"/>
                            </Col>
                            <Col xs={12} md="auto" className="landing-page-step-container">
                                <div className="landing-page-step">
                                    <h3>出席</h3>
                                    <p>募資成功後享受學習樂趣</p>
                                </div>
                            </Col>
                        </Row>
                        <div className="landing-page-action text-center mt-5">
                            <Link to={`/workshop`} className="btn btn-primary mr-3 btn-lg">看工作坊</Link>
                            <Link to={`/create-workshop`} className="btn btn-danger btn-lg">成為講者</Link>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default LandingPage;
