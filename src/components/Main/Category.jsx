import React from 'react';
import './category.css'

function Category({category1, category2}){
	return (
		<dl className ="category">
			<dt className="a11y-hidden">Category</dt>
			<dd>{category1}</dd>
			<dd>{category2}</dd>
		</dl>
	);
}

export default Category;