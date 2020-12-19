import React from 'react'
import './searchbox.styles.css'

export const SearchBox = ({ placeHolder, handleChange }) => (
	<input
		type="search"
		className="form-control"
		placeholder={placeHolder}
		name="searchTerm"
		autoComplete="off"
		onChange={handleChange}
	/>
);