import React, { Component } from 'react';

const Toolbar = ({update}) => {
	return (
		<input type="text" placeholder="Search in here..." className="btn btn-default" onChange={update}>
		</input>
	);
}


export default Toolbar;
