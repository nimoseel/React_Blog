import React from 'react'
import './main.css'
import Posts from '../Main/Posts'
import About from '../Main/About'


function Main({data}) {
	return (
		<main>
			<div className="max-width">
				<h2 className="a11y-hidden">Post</h2>
				<Posts posts={data.posts}/>
				<About user={data.users[0]}/>
			</div>
		</main>
	);
}

export default Main;