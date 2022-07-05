import React from 'react';
import './about.css'
import Facebook from '../../assets/Facebook.svg'
import Twitter from '../../assets/Twitter.svg'
import Instagram from '../../assets/Instagram.svg'
import Github from '../../assets/Github.svg'

function CategoriesItem({txt}){
	return(
			<li><a href="#">{txt}</a></li>
	);
};

function SnsItem({item}){
	return(
		<li>
			<a href="#">
			<img src={item} alt={item} />
			</a>
		</li>
	);
};

function About() {
    return (
		<aside className="about">
			<h2>About Me</h2>
			<img src="../images/profile.jpg" alt="" className="user-profile" />
			<p className="user-name">Chilli</p>
			<p className="user-description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
			<h3>Categories</h3>
			<ul className="categories">
				<CategoriesItem txt="Life" />
				<CategoriesItem txt="Style" />
				<CategoriesItem txt="Tech" />
				<CategoriesItem txt="Sport" />
				<CategoriesItem txt="Photo" />
				<CategoriesItem txt="Develop" />
				<CategoriesItem txt="Music" />
			</ul>
			
			<h3>Follow</h3>
			<ul className="sns">
				<SnsItem item={Facebook} />
				<SnsItem item={Twitter} />
				<SnsItem item={Instagram} />
				<SnsItem item={Github} />
			</ul>
		</aside>
    )
}

export default About;