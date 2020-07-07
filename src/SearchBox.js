import React from 'react';

const SearchBox = ({searchfield , searchChange}) => {
	return (
		<div className='pa1'>
		<input className='pa3 ba b--green br3  bg-lightest-blue' 
		type="search" 
		placeholder="search robots"
		onChange={searchChange}/>
		</div>
	)
}

export default SearchBox;