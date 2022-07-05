import React from 'react';
import './post.css';
import './author.css';
import './category.css';

import { Link } from 'react-router-dom';

function Post({thumbnail, title, category, profileImg, contents, userName, created}) {
    return (
		<Link to="/post" className="post">			
			<article>
				<img src={process.env.PUBLIC_URL+thumbnail} alt="" />
				<div className="contents-wrap">
					<dl className="category">
                        <dt className="a11y-hidden">Category</dt>
                        {category.map( (item, index) => <dd key={index}>{item}</dd>)}
                    </dl>
					<h3>{title}</h3>
					<dl className="author-wrap">
						<dt className="a11y-hidden">Author</dt>
						<dd className="author"><img src={process.env.PUBLIC_URL+profileImg}  alt="" />{userName}</dd>
						<dt className="a11y-hidden">Created</dt>
						<dd className="created">{created}</dd>
					</dl>
					<p className="post-description">
						{contents[0].text}
					</p>
				</div>
			</article>
		</Link>
    );
}

export default Post;