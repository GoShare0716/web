import React, { Component } from 'react';

import Skeleton from 'react-loading-skeleton';


class SkeletonProfile extends Component {

    render() {
        return (
            <div className={`profile py-5 inner`}>
                <div className="profile-img mb-3" style={{backgroundColor: '#ccc'}}></div>
                <h4 className="w-100"><Skeleton /></h4>
                <div className="mb-2">
                    <i className="fa fa-facebook-square mr-1" aria-hidden="true"/>
                    <span>臉書</span>
                    <span className="mx-2">·</span>
                    <i className="fa fa-user-circle mr-1" aria-hidden="true"/>
                    <span>作品</span>
                </div>
                <div className="w-100"><Skeleton count={1} /></div>
            </div>
        );
    }

}

export default SkeletonProfile;
