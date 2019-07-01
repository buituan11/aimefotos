import React, { Component } from 'react';
import './main.css';
class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
			<div>
				<div className="main container-fluid">
					<div className="row">
						<div className="video col-md-6 col-xs-12"> 
							<iframe  src="https://www.youtube.com/embed/M_ueZ9E2g_c?rel=0&autoplay=1" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
							{/*?rel=0&autoplay=1*/}								
							<p>Chúng mình luôn ở đây, lắng nghe câu chuyện của các cậu.❤️</p>
							<p>Hãy liên lạc với chúng tớ qua:</p> 
							<p><i className="fas fa-location-arrow" /> Email: <a href="#">Aimefotos@gmail.com</a> </p>
							<p><i className="fas fa-location-arrow" /> Phone number: 0949811898</p>
						    <p><i className="fas fa-location-arrow" /> Website: </p>
						    <p><i className="fas fa-location-arrow" /> Facebook: <a href="https://www.facebook.com/aimefotos/">https://www.facebook.com/aimefotos/</a></p>
						    <p><i className="fas fa-location-arrow" /> Instagram: <a href="https://www.instagram.com/aime.fotos/">https://www.instagram.com/aime.fotos/</a></p>
						</div>
						<div className="intro col-md-6 col-xs-12">
							<p>Đây là nơi để chúng mình, Aimé chia sẻ những bức ảnh chúng mình đi lang thang với nhau chụp lại. Vài tấm ảnh film, dăm ba cái ảnh số và một bàn tay cầm son cùng những mẩu chuyện ấn tượng. Tất cả đều ở đây. </p>
						    <p>Hy vọng là các cậu sẽ thích, sẽ có một chút cảm giác rung động nào đó khi nhìn ảnh của chúng mình. Hay đơn giản chỉ là các cậu thích chụp ảnh, hoặc nói dăm ba câu chuyện phiếm cũng được, đừng ngại, chúng mình ở đây, luôn lắng nghe các cậu. Biết đâu câu chuyện đó lại là cảm hứng cho bộ ảnh mới của chúng mình? ❤️❤️❤️</p>
						    <p>Mong các cậu luôn yêu thương và ủng hộ Aimé ❤</p>
						    <p>---/---</p>
						    <p>Enjoy,</p>
						    <p>Aimé</p>
						    <p>---/---</p>
						</div>
					</div>
				</div>
			</div>           
        );
    }
}

export default Main;
