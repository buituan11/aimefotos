import React, { Component } from 'react';
import './contact.css';
class Contact extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="contact container-fluid">
            	<div className="row">
            		<div className="col-md-8 col-xs-12">
            			<div className="foto contact-img zoom">
            				<img src="Img/fotobyaime.jpg"/>
            			</div>
            			<a href="#"> Fotos by Aimé's </a>
            		</div>
            		<div className="col-md-4 col-xs-12">
            			<div className="aime contact-img zoom">
            				<img src="Img/aimehere.jpg"/>
            			</div>
            			<a href="#"> Aimé's here </a>
            			<div className="about contact-img zoom">
            				<img src="Img/about.jpg"/>
            			</div>
            			<a href="#"> Aimé's here </a>
            		</div>
            	</div>
            </div>
        );
    }
}

export default Contact;