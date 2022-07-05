import React from 'react'
import Post from './Post.jsx';
import './posts.css'
import {Link} from 'react-router-dom'

function Posts() {
return (
	<ul className="posts">
		<li>
			<Link to='/post'><Post src="../images/post-img6.jpg" /></Link>
		</li>
		<li>
			<Link to='/post'><Post src="../images/post-img5.jpg" /></Link>
		</li>
		<li>
			<Link to='/post'><Post src="../images/post-img4.jpg" /></Link>
		</li>
		<li>
			<Link to='/post'><Post src="../images/post-img3.jpg" /></Link>
		</li>
		<li>
			<Link to='/post'><Post src="../images/post-img2.jpg" /></Link>
		</li>
		<li>
			<Link to='/post'><Post src="../images/post-img1.jpg" /></Link>
		</li>
	</ul>
    )
}

export default Posts;