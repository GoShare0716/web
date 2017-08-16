import './ProgressBar.css';

import React, {Component} from 'react';


class ProgressBar extends Component {
    static defaultProps = {
        height: '1rem',
        text: ''
    };

    render() {
        const {className, height, color, value, text} = this.props;
        return (
            <div className={`progress-bar-container ${className}`} style={{
                height
            }}>
                <div className="progress-bar-bar" style={{
                    width: `${value}%`,
                    backgroundColor: color
                }}/>
                <div className="progress-bar-text">{text}</div>
            </div>
        );
    }

}

export default ProgressBar;
