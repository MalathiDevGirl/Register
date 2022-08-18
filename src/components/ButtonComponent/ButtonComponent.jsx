import './button.style.css';
import {hasNoError, getLocalStorage} from '../../utils/utilities';
import { useNavigate,useLocation  } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { registerActions } from '../../store/registerSlice';
import { signInActions } from '../../store/signInSlice';
import { defaultRegisterInput, defaultSignInInput } from '../../utils/constants';

const ButtonComponent = (props) => {  
const registerInput = useSelector( (state) => state.registerSlice);
const signInInput = useSelector( (state) => state.signInSlice);
const dispatch = useDispatch();    
const navigate = useNavigate(); 
const location = useLocation();

const registerHandler = (data,event) => {   
    event.preventDefault();
    if(location.pathname === "/register"){
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
                "id": existingData.length + 1,
                "name": data.name.value,
                "date": data.date.value,
                "gender": data.gender.value,
                "email": data.email.value,
                "password": window.btoa(data.password.value),
                "status": "Added",
                "LoginStatus": "Offline",
            }
            localStorage.setItem("entryData", JSON.stringify(entryData));
            existingData.push(entryData);
            localStorage.setItem("existingData", JSON.stringify(existingData));
            dispatch(registerActions.inputClear(defaultRegisterInput));    
            navigate('/') 
        }
    }
    else if(location.pathname === "/") {
        dispatch(signInActions.inputClear(defaultSignInInput)); 
        navigate('/register');
    }
}

const signinHandler = (data,event) => {
    event.preventDefault();  
    if(location.pathname === "/"){
        if(data.userEmail.value === "admin@gmail.com" && data.userPassword.value === "admin123"){
            dispatch(signInActions.inputClear(defaultSignInInput));
            navigate('/welcome',{state:{userType:'admin'}});
            return;
        }
        else {
            for (var key in data) {
                if (
                    data[key].value === "" ||
                    data[key].value.length === 0
                ) {
                const payload = { key: key, error: true };
                dispatch(signInActions.key(payload));
                return;
                }
            } 

            if(hasNoError(data)) {
                let existingData = getLocalStorage("existingData");
                if(existingData === null) {
                alert("Kindly register first");
                dispatch(signInActions.inputClear(defaultSignInInput));
                navigate('/register');
                return;
                }
                else{
                const userData = existingData.filter((value) => {
                    return value.email === data.userEmail.value && window.atob(value.password) === data.userPassword.value && value.status ==="Added";
                })                
                    if(userData.length > 0){
                        alert("Welcome");
                        dispatch(signInActions.inputClear(defaultSignInInput));
                        navigate('/welcome',{state:{userType:'user', ...userData[0]}});
                        return;
                    }
                    else {
                        alert("Kindly register first");
                        dispatch(signInActions.inputClear(defaultSignInInput));
                        navigate('/register');
                        return;
                    }   
                }        
            }
        }
    }
    else if(location.pathname === "/register") {
        dispatch(registerActions.inputClear(defaultRegisterInput)); 
        navigate('/');
    } 
}
const buttonClickHandler = (e) => {
       e.target.value === "Sign in" ? signinHandler(signInInput,e) :registerHandler(registerInput,e);
}

    return (
       <button className={`${props.className}`} value={`${props.value}`} onClick={buttonClickHandler}>
            {props.value}
        </button>
    );

}
export default ButtonComponent;