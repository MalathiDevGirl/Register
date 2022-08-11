import '../../css/button.css';
import {Signup,Signin} from '../../common/clickHandler';
import { Link } from 'react-router-dom';
const Button = (props) => {
    const buttonClickHandler = (e) => {
       e.target.value === "Register" ? Signup() : Signin();
    }
    return (
        <Link to={props.value === "Register" ? '/' : '/Signin'}><button className={`${props.className}`} value={`${props.value}`} onClick={buttonClickHandler}>
            {props.value}
        </button>
        </Link>
    );
}
export default Button;