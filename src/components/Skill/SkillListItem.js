import React, {Component} from 'react';

import './SkillListItem.css';

class SkillListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 'none',
            basicStyle: {
                progress: null,
                bar: null
            },
            advancedStyle: {
                progress: null,
                bar: null
            },
            nameStyle: null
        };
        this.onBasicMouseOver = this.onBasicMouseOver.bind(this);
        this.onBasicMouseLeave = this.onBasicMouseLeave.bind(this);
        this.onAdvancedMouseOver = this.onAdvancedMouseOver.bind(this);
        this.onAdvancedMouseLeave = this.onAdvancedMouseLeave.bind(this);
        this.onNameMouseOver = this.onNameMouseOver.bind(this);
        this.onNameMouseLeave = this.onNameMouseLeave.bind(this);
    }

    onBasicMouseOver() {
        this.setState({
            basicStyle: {
                progress: {
                    borderColor: '#5cb85c'
                },
                bar: {
                    width: this.initialStyle.basicStyle.bar.width,
                    backgroundColor: '#5cb85c'
                }
            },
            nameStyle: {
                borderColor: '#5cb85c',
                backgroundColor: '#5cb85c',
                color: 'white'
            }
        });
    }

    onBasicMouseLeave() {
        this.setState({
            basicStyle: {
                progress: null,
                bar: null
            },
            nameStyle: null
        })
    }

    onAdvancedMouseOver() {
        this.setState({
            advancedStyle: {
                progress: {
                    borderColor: '#0275d8'
                },
                bar: {
                    width: this.initialStyle.advancedStyle.bar.width,
                    backgroundColor: '#0275d8'
                }
            },
            nameStyle: {
                borderColor: '#0275d8',
                backgroundColor: '#0275d8',
                color: 'white'
            }
        })
    }

    onAdvancedMouseLeave() {
        this.setState({
            advancedStyle: {
                progress: null,
                bar: null
            },
            nameStyle: null
        })
    }

    onNameMouseOver() {
        switch (this.props.vote.level) {
            case 'basic':
                this.onBasicMouseOver();
                break;
            case 'advanced':
                this.onAdvancedMouseOver();
                break;
            default:

        }
    }

    onNameMouseLeave() {
        this.setState({
            basicStyle: {
                progress: null,
                bar: null
            },
            advancedStyle: {
                progress: null,
                bar: null
            },
            nameStyle: null
        })
    }

    render() {
        const {basicStyle, advancedStyle, nameStyle} = this.state;
        const {
            id,
            name,
            vote: {
                basic,
                advanced,
                level
            }
        } = this.props;
        const basicProgress = basic.number * 100 / (basic.number + advanced.number),
            advancedProgess = advanced.number * 100 / (basic.number + advanced.number);

        this.initialStyle = {
            basicStyle: {
                progress: {
                    borderColor: '#d0e9c6'
                },
                bar: {
                    width: `${basicProgress}%`,
                    backgroundColor: '#dff0d8'
                }
            },
            advancedStyle: {
                progress: {
                    borderColor: '#bcdff1'
                },
                bar: {
                    width: `${advancedProgess}%`,
                    backgroundColor: '#d9edf7'
                }
            }
        }

        switch (level) {
            case 'basic':
                this.initialStyle.nameStyle = {
                    borderColor: '#d0e9c6',
                    backgroundColor: '#dff0d8'
                }
                break;
            case 'advanced':
                this.initialStyle.nameStyle = {
                    borderColor: '#bcdff1',
                    backgroundColor: '#d9edf7'
                }
                break;
            default:
                this.initialStyle.nameStyle = {
                    borderColor: 'rgba(0, 0, 0, .125)',
                    backgroundColor: '#fff'
                }
        }

        return (
            <div className="skill-list-item">
                <div className="skill-list-item-basic">
                    <div className="skill-list-item-number hidden-xs-down">+{basic.number}</div>
                    <div className="skill-list-item-avatar hidden-sm-down">
                        <img src="https://scontent.xx.fbcdn.net/v/t1.0-1/c0.19.50.50/p50x50/18622427_1859238271067164_3869120362467491071_n.jpg?oh=3c51ad379f496d4de20e0c18759614d8&oe=5A31E1D7" alt=""/>
                        <img src="https://scontent-tpe1-1.xx.fbcdn.net/v/t1.0-1/p32x32/14915540_1715220865464246_4727687316731100143_n.jpg?oh=b82a1c7b8f13190cf46e1feec461332f&oe=59F92178" alt=""/>
                    </div>
                    <div className="skill-list-item-progress" onMouseOver={this.onBasicMouseOver} onMouseLeave={this.onBasicMouseLeave} style={basicStyle.progress || this.initialStyle.basicStyle.progress}>
                        <div className="skill-list-item-bar" style={basicStyle.bar || this.initialStyle.basicStyle.bar}/>
                    </div>
                </div>
                <div className="skill-list-item-name"  onMouseOver={this.onNameMouseOver} onMouseLeave={this.onNameMouseLeave} style={nameStyle || this.initialStyle.nameStyle}>{name}</div>
                <div className="skill-list-item-advanced">
                    <div className="skill-list-item-progress" onMouseOver={this.onAdvancedMouseOver} onMouseLeave={this.onAdvancedMouseLeave} style={advancedStyle.progress || this.initialStyle.advancedStyle.progress}>
                        <div className="skill-list-item-bar" style={advancedStyle.bar || this.initialStyle.advancedStyle.bar}/>
                    </div>
                    <div className="skill-list-item-avatar hidden-sm-down">
                        <img src="https://scontent.xx.fbcdn.net/v/t1.0-1/c0.19.50.50/p50x50/18622427_1859238271067164_3869120362467491071_n.jpg?oh=3c51ad379f496d4de20e0c18759614d8&oe=5A31E1D7" alt=""/>
                        <img src="https://scontent-tpe1-1.xx.fbcdn.net/v/t1.0-1/p32x32/14915540_1715220865464246_4727687316731100143_n.jpg?oh=b82a1c7b8f13190cf46e1feec461332f&oe=59F92178" alt=""/>
                    </div>
                    <div className="skill-list-item-number hidden-xs-down">+{advanced.number}</div>

                </div>
            </div>
        );
    }

}

export default SkillListItem;
