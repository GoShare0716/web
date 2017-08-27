import React, {Component} from 'react';

import {Row} from 'reactstrap';
import SkeletonProfile from './SkeletonProfile';
import SkeletonWorkshopItem from './SkeletonWorkshopItem';



class SkeletonUser extends Component {

    render() {
        return (
            <div className="outer user">
                <SkeletonProfile/>
                <div className="user-propose">
                    <h3>我主辦的工作坊</h3>
                    <hr/>
                    <Row>
                        <SkeletonWorkshopItem/>
                        <SkeletonWorkshopItem/>
                        <SkeletonWorkshopItem/>
                    </Row>
                </div>
                <div className="user-attend">
                    <h3>我報名的工作坊</h3>
                    <hr/>
                    <Row>
                        <SkeletonWorkshopItem/>
                        <SkeletonWorkshopItem/>
                        <SkeletonWorkshopItem/>
                    </Row>
                </div>
            </div>
        );
    }

}

export default SkeletonUser;
