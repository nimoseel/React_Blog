import React from 'react';
import './about.css';
import Facebook from '../../assets/Facebook.svg';
import Twitter from '../../assets/Twitter.svg';
import Instagram from '../../assets/Instagram.svg';
import Github from '../../assets/Github.svg';

function SnsItem({item}){
	return(
		<li>
			<a href="#">
				<img src={item} alt={item} />
			</a>
		</li>
	);
};

function About({user}) {
    return (
		<aside className="about">
			<h2>About Me</h2>
			<img src={process.env.PUBLIC_URL+user.profileImg} alt="" className="user-profile" />
			<p className="user-name">{user.name}</p>
			<p className="user-description">{user.userInfo}</p>
			<h3>Categories</h3>
			<ul className="categories">
				{user.category.map( (item, index) => <li key={index}><a href="#">{item}</a></li>)}
			</ul>
			
			<h3>Follow</h3>
			<ul className="sns">
				<SnsItem item={Facebook} />
				<SnsItem item={Twitter} />
				<SnsItem item={Instagram} />
				<SnsItem item={Github} />
			</ul>
		</aside>
    );
}

export default About;