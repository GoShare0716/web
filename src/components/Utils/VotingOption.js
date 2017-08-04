import React, {Component} from 'react';
import {InputGroup, InputGroupAddon, Input} from 'reactstrap';

import './VotingOption.css';

import UserAvatar from './UserAvatar';

class VotingOption extends Component {
    static defaultProps = {
        index: 0,
        title: '我想入門',
        progress: 80,
        friends: [
            {
                id: 5,
                thumbnailUrl: 'https://scontent.ftpe3-2.fna.fbcdn.net/v/t1.0-1/c0.25.64.64/p64x64/18622427_1859238271067164_3869120362467491071_n.jpg?oh=84e54bc64012d3fdcfb2236d78ca96b8&oe=59FF9727'
            }, {
                id: 6,
                thumbnailUrl: 'https://scontent.ftpe3-2.fna.fbcdn.net/v/t1.0-1/p64x64/18033585_1336400693122300_4338329632218462346_n.jpg?oh=44fcd106553b6fb14fee1301e3177bc7&oe=5A085465'
            }
        ],
        number: 36
    };

    render() {
        let {
            index,
            title,
            progress,
            friends,
            number,
            checked,
            onCheckboxChange
        } = this.props;
        return (
            <InputGroup className="vote">
                <InputGroupAddon className="vote-checkbox" onClick={e => onCheckboxChange(e, index)}>
                    <Input addon type="checkbox" checked={checked} onChange={e => onCheckboxChange(e, index)}/>
                </InputGroupAddon>
                <div className="vote-content" onClick={e => onCheckboxChange(e, index)}>
                    <div className="vote-progress" style={{
                        width: `${progress}%`
                    }}></div>
                    <div className="vote-title">{title}</div>
                </div>
                <div className="d-flex align-items-center">
                    <span className="hidden-sm-down">
                        {this.renderFriends(friends)}
                    </span>
                    <div className="vote-number">
                        <span>{number}</span>
                    </div>
                </div>
            </InputGroup>
        );
    }

    renderFriends(friends) {
        return friends.slice(0, Math.min(2, friends.length)).map((friend, index) => <UserAvatar className="mr-1" size="32px" key={index} {...friend}/>);
    }
}

export default VotingOption;
