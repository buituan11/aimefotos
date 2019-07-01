import React, { Component } from 'react';
import './header.css';
class Header extends Component {
    constructor(props) {
        super(props);
        this.state= {
        	width: 0
        }
    }
    showNavDesk = () => {
    	return(
      		<nav className="menuDesk nav nav-tabs">
				  <a className="nav-link active" id="home-tab" data-toggle="tab" href="#">Trang chủ</a>
				  <a className="nav-link" id="home-tab" data-toggle="tab" href="#">Fotos by Aimé</a>
				  <a className="nav-link" id="home-tab" data-toggle="tab" href="#">Aimé's here</a>
				  <a className="nav-link" id="home-tab" data-toggle="tab" href="#">About us</a>
				  <a className="nav-link" id="home-tab" data-toggle="tab" href="#">Contact us</a>
				  <button className="btn btn-light" data-toggle="modal" data-backdrop="static"><i className="fas fa-search" /></button>
			</nav>	    	
		);
    }
    dropMenu = () =>{    		
    	let t = document.getElementById("dropMenu").style.display;
    	 t = t === 'none'? 'block' : 'none';
    	document.getElementById("dropMenu").style.display = t;
    }
    showNavMob = () =>{
    	return(
    		<div className="drop">
				<div><button type="button" id ="menuMob" className="btn btn-light" onClick={ () => this.dropMenu() }> Menu </button></div>
				<div><div id="dropMenu" > 
					<a href="#"> Trang chủ </a> 
					<a href="#"> Fotos by Aimé </a> 
					<a href="#"> Aimé's here</a>
					<a href="#"> About us </a>
					<a href="#"> Contact us </a>
				</div></div>
			</div>
    	);
    }
    resizeNav = () =>{
    	return this.state.width > 950? this.showNavDesk() : this.showNavMob();	
    	//Thay đổi hiện thị menu theo kích cỡ màn hình
    }
    handleResize = () =>{
    	this.setState({ width: window.innerWidth });
    }
    componentDidMount() {
    	this.handleResize(); 
    	window.addEventListener('resize', this.handleResize)
    }
    componentWillUnmount() {
    	window.removeEventListener('resize', this.handleResize)
  	}
    render() {	
        return (
        	<header>
	            <div className="header container-fluid">
	            	<div className="row">
	            		<div className="logo">
	            			<img src="Img/logo.png"/>
	            			<p> Aimefotos </p>
	            		</div>
	            		<div className="col-md-9">
	            			{ this.resizeNav() }
	            		</div>
	            	</div>
	            </div>
	            <div className="img-background">
	            	<p> Welcome to Aiméfotos</p>
	            </div>
	         </header>
        );
    }
}

export default Header;
