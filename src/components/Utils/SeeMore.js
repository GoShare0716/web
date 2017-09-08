import React, {Component} from 'react';


class SeeMore extends Component {
    static defaultProps = {
        text: '',
        more: ''
    };

    constructor(props) {
        super(props);
        this.onSeeMoreClick = this.onSeeMoreClick.bind(this);
        this.state = {
            isOpen: false
        };
    }

    onSeeMoreClick() {
        this.setState({isOpen: true});
    }

    render() {
        const {isOpen} = this.state;
        const {text, more} = this.props;

        return (
            <div>{isOpen
                    ? more.map(m => <p>{m}</p>)
                    : text.map(t => <p>{t}</p>)}
                    {!isOpen && <span className="link" onClick={this.onSeeMoreClick}>{'更多'}</span>}
            </div>
        );
    }

}

export default SeeMore;
