import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) => {
	if(isSignedIn){
		return(
			<nav style={{display: 'flex', justifyContent: 'flex-end'}}> 
				<p onClick={() => onRouteChange('signout')} className="f3 link dim black pa4 pb2 underline pointer"> Sign out </p>
			</nav>
		);
	}else{
		return(
			<nav style={{display: 'flex', justifyContent: 'flex-end'}}> 
				<p onClick={() => onRouteChange('signin')} className="f3 link dim black pa4 pb2 underline pointer"> Sign in </p>
				<p onClick={() => onRouteChange('register')} className="f3 link dim black pa4 pb2 underline pointer"> Register </p>
			</nav>
		);	
	}
}

export default Navigation;