import React from 'react'
import './banner.css'

function Banner({data}) {

return (
    <div className="banner">
		<div className="max-width">
			<div className="banner-contents">
				<p className="sub-text">{data.blog.subTitle}</p>
				<p className="main-text">{data.blog.mainTitle}</p>
				<p className="description">
					{data.blog.description}
				</p>
			</div>
		</div>
	</div>
);
}

export default Banner