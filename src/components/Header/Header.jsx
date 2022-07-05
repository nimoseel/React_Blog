import React, {useState} from 'react';
import './header.css';
import './button.css';
import Logo from '../../assets/Logo.svg';
import Logined from './Logined';
import Logouted from './Logouted';

import { Link } from 'react-router-dom';

const Header = () => {
const [login, setLogin] = useState(false);

	return(
		<header>
			<div className="max-width">
				<h1>
					<Link to = "/">
						<img src={Logo} alt="My Blog" />
					</Link>
				</h1>
				{login? <Logined setLogin={setLogin}/> : <Logouted setLogin={setLogin}/>}
			</div>
		</header>
	);
}

export default Header;