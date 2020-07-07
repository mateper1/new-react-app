import React from 'react';
import './SearchBox.css';

const SearchBox = ({searchfield , searchChange}) => {
	return (
		<div className='pa1'>
		<input className='pa3 ba br3  bg-lightest-blue' 
		type="search" 
		placeholder="type robot name"
		onChange={searchChange}/>
		</div>
	)
}

export default SearchBox;
