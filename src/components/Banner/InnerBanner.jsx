import React from 'react'
import './banner.css'

function InnerBanner() {
	return (
		<div className="banner" 
		style={{"background-image": `url(${process.env.PUBLIC_URL}/images/post-background6.jpg)`}}
		>
			<div className="max-width">
				<div className='banner-contents'>
					<p className="today">May<em>25</em>Wednesday</p>
				</div>
				
			</div>
		</div>
	);
}
export default InnerBanner