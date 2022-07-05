import React from 'react';
import './post.css';
import Category from '../Main/Category';
import Author from '../Main/Author';

function Post({src}) {
    return (
        <a href="post-view.html" className="post">
			<article>
				<img src={src} alt="" />
				<div className="contents-wrap">
					<Category category1="Life" category2="Style"/>
					<h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit</h3>
					<Author />
					<p className="post-description">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est
						facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta
						corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
						illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum
						dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis
						dolor quas odio cum incidunt repudiandae vel."
					</p>
				</div>
			</article>
		</a>
    )
}

export default Post;