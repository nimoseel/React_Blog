import "./header.css";
import "./button.css"
import Login from "../../assets/icon-login.svg";
import Register from "../../assets/icon-register.svg";

const Logouted = ({setLogin}) => {
    return (
    <ul>
        <li>
			<a href="#" className="button gray" onClick={()=>setLogin(true)}>
				<img src={Login} alt="" />
				<span>Login</span>
			</a>
		</li>
		<li class="only-pc">
			<a href="#" className="button gray">
				<img src={Register} alt="" />
				<span>Register</span>
			</a>
		</li>
    </ul>
    );
}

export default Logouted;