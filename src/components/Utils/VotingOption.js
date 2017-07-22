import React, {Component} from 'react';
import {InputGroup, InputGroupAddon, Input} from 'reactstrap';

import './VotingOption.css';

class VotingOption extends Component {

    render() {
        return (
            <InputGroup>
                <InputGroupAddon>
                    <Input addon type="checkbox"/>
                </InputGroupAddon>
                <div className="vote-content">
                    <div className="vote-progress"></div>
                    <div className="vote-title">我想入門</div>
                </div>
                <div className="d-flex align-items-center">
                    <span className="hidden-md-down">
                        <img className="mr-1" width="32px" height="32px" src="https://scontent.ftpe3-2.fna.fbcdn.net/v/t1.0-1/c0.25.64.64/p64x64/18622427_1859238271067164_3869120362467491071_n.jpg?oh=84e54bc64012d3fdcfb2236d78ca96b8&oe=59FF9727" alt="fb"/>
                        <img className="mr-1" width="32px" height="32px" src="https://scontent.ftpe3-2.fna.fbcdn.net/v/t1.0-1/p64x64/18033585_1336400693122300_4338329632218462346_n.jpg?oh=44fcd106553b6fb14fee1301e3177bc7&oe=5A085465" alt="fb"/>
                    </span>
                    <div className="vote-number">
                        <span>+36</span>
                    </div>
                </div>
            </InputGroup>
        );
    }

}

export default VotingOption;
