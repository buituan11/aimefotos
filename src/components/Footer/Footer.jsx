import React, { Component } from 'react';
import './Footer.css';
class Footer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <footer className="footer"> 
			  <p>© 2019 All Rights Reserved • Design by BQT Company</p>			
			</footer>
        );
    }
}

export default Footer;
