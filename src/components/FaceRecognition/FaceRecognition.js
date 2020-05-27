import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({file, box}) => {
		return(
		<div className="center mb5">
			<div className="absolute mt2r">
				<img src={file} alt='' id="inputImage"/>
				<div 
				className="bounding-box" 
				style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}>
				</div>
			 </div>
		</div>
	);
}

export default FaceRecognition;
