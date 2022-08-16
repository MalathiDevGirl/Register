import './button.style.css';
import {hasNoError} from '../../utils/utilities';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { registerActions } from '../../store/registerSlice';
import { defaultRegisterInput } from '../../utils/constants';

const ButtonComponent = (props) => {    
const registerInput = useSelector( (state) => state.registerSlice);
const dispatch = useDispatch();
const navigate = useNavigate();

const registerHandler = (data) => {   

    for (var key in data) {
        if (
            data[key].value === "" ||
            data[key].value.length === 0
        ) {
          const payload = { key: key, error: true };
          dispatch(registerActions.key(payload));
          return;
        }
      }

    if(hasNoError(data)) {
        let existingData = JSON.parse(localStorage.getItem("existingData"));
        if(existingData === null) {
            existingData = [];
        }
        let entryData = {
            "name": data.name.value,
            "date": data.date.value,
            "gender": data.gender.value,
            "email": data.email.value,
            "password": data.password.value
        }
        localStorage.setItem("entryData", JSON.stringify(entryData));
        existingData.push(entryData);
        localStorage.setItem("existingData", JSON.stringify(existingData));
        dispatch(registerActions.inputClear(defaultRegisterInput));
    }
}

const signinHandler = () => {
    console.log("Signin");
    navigate('/register');
}
    const buttonClickHandler = (e) => {
       e.target.value === "Register" ? registerHandler(registerInput) : signinHandler();
    }
    return (
        <Link to={props.value === "Register" ? '/register' : '/'}><button className={`${props.className}`} value={`${props.value}`} onClick={buttonClickHandler}>
            {props.value}
        </button>
        </Link>
    );
}
export default ButtonComponent;