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
                            <Link to="/workshop">工作坊</Link>
                            <Link to="/create-workshop">成為講者</Link>
                        </span>
                        <span>
                            <Link to="/about">關於我們</Link>
                            <a href="https://m.me/goshare0716" target="_blank" rel="noopener noreferrer">聯絡我們</a>
                        </span>
                        <span>
                            <a href="https://www.facebook.com/goshare0716/" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-facebook-square fa-lg" aria-hidden="true"/>
                            </a>
                            <a href="https://github.com/GoShare0716/" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-github fa-lg" aria-hidden="true"/>
                            </a>
                        </span>

                    </div>
                </div>
            </footer>
        );
    }

}

export default Footer;
