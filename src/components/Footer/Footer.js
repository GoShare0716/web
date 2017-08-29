import './Footer.css';

import React, {Component} from 'react';

import {Link} from 'react-router-dom';



class Footer extends Component {

    render() {
        return (
            <footer className="footer-container">
                <div className="outer footer">
                    <small className="text-muted">© 2017 GoShare All Rights Reserved</small>
                    <div className="footer-anchor">
                        <span>
                            <Link to="/">關於我們</Link>
                            <Link to="/workshop">看工作坊</Link>
                        </span>
                        <span>
                            <Link to="/create-workshop">成為講者</Link>
                            <a href="https://www.facebook.com/messages/t/goshare0716" target="_blank" rel="noopener noreferrer">聯絡我們</a>
                        </span>
                        <a href="https://www.facebook.com/goshare0716/" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-facebook-square fa-lg" aria-hidden="true"/>
                        </a>
                    </div>
                </div>
            </footer>
        );
    }

}

export default Footer;
