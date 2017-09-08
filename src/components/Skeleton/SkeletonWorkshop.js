import {Badge, Button, Col, Jumbotron, Row} from 'reactstrap';
import React, {Component} from 'react';

import ProgressBar from '../Utils/ProgressBar';
import Skeleton from 'react-loading-skeleton';
import SkeletonProfile from './SkeletonProfile';




class SkeletonWorkshop extends Component {

    render() {
        return (
            <div className="full workshop">
                <div className="workshop-profile" style={{
                    backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, .8), rgba(0, 0, 0, .6))'
                }}>
                    <SkeletonProfile/>
                </div>
                <div className="inner workshop-article">
                    <Badge className="workshop-badge w-100" style={{
                        backgroundColor: '#eee',
                        color: '#eee'
                    }}>badge</Badge>
                    <h1><Skeleton/></h1>
                    <div>
                        <Jumbotron className="workshop-state">
                            <Row className="text-center mb-2">
                                <Col xs={6} sm={3}>
                                    <small><Skeleton/></small>
                                    <h3><Skeleton/></h3>
                                </Col>
                                <Col xs={6} sm={3}>
                                    <small><Skeleton/></small>
                                    <h3><Skeleton/></h3>
                                </Col>
                                <Col xs={6} sm={3}>
                                    <small><Skeleton/></small>
                                    <h3><Skeleton/></h3>
                                </Col>
                                <Col xs={6} sm={3}>
                                    <small><Skeleton/></small>
                                    <h3><Skeleton/></h3>
                                </Col>
                            </Row>
                            <ProgressBar className="mb-2" height={'0.5rem'}/>
                            <Row className="text-center">
                                <Col>
                                    <small><Skeleton/></small>
                                    <h3>
                                        <del><Skeleton/></del>
                                    </h3>
                                </Col>
                                <Col>
                                    <small><Skeleton/></small>
                                    <h3><Skeleton/></h3>
                                </Col>
                            </Row>
                        </Jumbotron>
                        <div className="workshop-state-attend">
                            <Button size="lg" block style={{
                                backgroundColor: '#eee',
                                color: '#eee',
                                borderColor: '#eee'
                            }}>attend</Button>
                            <Skeleton/>
                        </div>
                    </div>
                    <div className="workshop-info">
                        <h3>工作坊資訊</h3>
                        <ul>
                            <li><Skeleton/></li>
                            <li><Skeleton/></li>
                        </ul>
                    </div>
                    <div>
                        <h3>你將學會...</h3>
                        <Skeleton count={3}/>
                    </div>
                    <div>
                        <h3>你需要具備...</h3>
                        <Skeleton count={3}/>
                    </div>
                    <div>
                        <h3>這堂課適合給...</h3>
                        <Skeleton count={3}/>
                    </div>
                    <div>
                        <h3>簡短敘述</h3>
                        <Skeleton count={5}/>
                    </div>
                    <div>
                        <h3>詳細介紹</h3>
                        <Skeleton count={5}/>
                    </div>
                </div>
            </div>
        );
    }

}

export default SkeletonWorkshop;
