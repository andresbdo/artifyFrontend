import React from 'react';
import Tilt from 'react-tilt';
import brush from './logo.png';
import './Logo.css';

const Logo = () => {
	return(
		<div className=" center ma4 mt0">
			<Tilt className="Tilt br2 shadow-2" options={{ max : 35 }} style={{ height: 125, width: 125 }} >
 				<div className="Tilt-inner pa3"> 
 					<img style={{paddingTop: '5px'}} src={brush} alt="logo"/> 
 				</div>
			</Tilt>
		</div>
	);
}

export default Logo;