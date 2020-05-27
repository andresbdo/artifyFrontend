import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
	return(
		<div>
			<p className="f3"> 
				{'This magic brain will detect faces in your pictures. Git it a try!'}
			</p>
			<div>
				<input id="imageLink" className='f4 pa3 tc w-70 center' type='text' placeholder='Enter a link...' onChange={onInputChange}/>
				<button id="paintIt" className='w-30 grow f4 ma4 link pv2 dib' onClick={onButtonSubmit}> Paint it! <span role="img" aria-label="emoji">🖌️</span> </button>
			</div>
		</div>
	);
}

export default ImageLinkForm;




