import './header.css';
import "./button.css";
import profile from "../../assets/profile.jpg";
import writeBtn from "../../assets/icon-modify-white.svg";
import logoutBtn from "../../assets/icon-logout.svg";

import React from 'react'

function Logined({setLogin}) {
return (
	<ul>
		<li className="profile-img">
			<a href="#">
				<img src={profile} alt="My Page" />
			</a>
		</li>
		<li>
			<a href="#" className="button">
				<img src={writeBtn} alt="" />
				<span>Write</span>
			</a>
		</li>
		<li>
			<button className="button white" onClick={()=>setLogin(false)}>
				<img src={logoutBtn} alt="" />
				<span>Logout</span>
			</button>
		</li>
    </ul>
	)
}

export default Logined