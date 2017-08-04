import React, {Component} from 'react';
import './ProgressBar.css';

class ProgressBar extends Component {

    render() {
        const {className, color, value, text} = this.props;
        return (
            <div className={`progress-bar-container ${className}`}>
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
