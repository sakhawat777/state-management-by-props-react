import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const CategoryDetails = (props) => {
	const category = useContext(CategoryContext);
	const { count } = props;
	return (
		<div>
			<h4>This is Category Details:{count} </h4>
			<h3>Selected Category: {category}</h3>
		</div>
	);
};

export default CategoryDetails;
