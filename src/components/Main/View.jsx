import React from 'react';
import './view.css';
import './wrapbox.css';
import './category.css';
import './author.css';
import {Link} from 'react-router-dom';

function View() {
    return (
        <div className="view">
			<div className="max-width">
				<section className="wrap-box">
					<div className="inner">

						<dl className="author-wrap">
							<dt className="a11y-hidden">Author</dt>
							<dd className="author"><img src="../assets/profile.jpg" alt="" /> Chilli</dd>
							<dt className="a11y-hidden">Created</dt>
							<dd className="created">2022.05.25</dd>
						</dl>

						<dl className="category">
							<dt className="a11y-hidden">Category</dt>
							<dd>life</dd>
							<dd>style</dd>
						</dl>
						<div className="title-wrap">
							<h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h2>
							<button className="btn-like">Like</button>
						</div>
						<hr />
						<div className="view-contents">
							<p>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est
								facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti
								dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum
								nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit
								amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio
								cum incidunt repudiandae vel.
							</p>
							<img src="./images/post-background6.jpg" alt="" />
							<p>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est
								facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti
								dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum
								nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit
								amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio
								cum incidunt repudiandae vel.
							</p>
						</div>
						<div className="btn-group">
							<a href="#" className="btn-modify">
								<span className="a11y-hidden">modify</span>
							</a>
							<button type="button" className="btn-delete">
								<span className="a11y-hidden">delete</span>
							</button>
						</div>
						<Link to="/home" className="btn-back">
							<span className="a11y-hidden">Back</span>
						</Link>
					</div>
				</section>
			</div>
		</div>
    )
}

export default View;