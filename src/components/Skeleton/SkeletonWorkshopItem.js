import {Card, CardBlock, Col} from 'reactstrap';
import React, {Component} from 'react';

import ProgressBar from '../Utils/ProgressBar';
import Skeleton from 'react-loading-skeleton';



class SkeletonWorkshopItem extends Component {

    render() {
        return (
            <Col className="mb-3" xs={12} sm={6} lg={4}>
                <Card className="workshop-item">
                    <div className="embed-responsive embed-responsive-16by9" style={{
                        backgroundColor: '#eee'
                    }}></div>
                    <CardBlock>
                        <h4 className="workshop-item-title mb-2"><Skeleton/></h4>
                        <div className="text-muted mb-2">
                            <Skeleton/>
                        </div>
                        <ProgressBar className="mb-2"/>
                        <div className="workshop-item-price-container">
                            <span className="workshop-item-price"><Skeleton/></span>
                        </div>
                    </CardBlock>
                </Card>
            </Col>
        );
    }

}

export default SkeletonWorkshopItem;
