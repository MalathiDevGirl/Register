import InputComponent from "../../components/InputComponent/InputComponent";
import ErrorComponent from "../../components/ErrorComponent/ErrorComponent";
import ButtonContainerComponent from "../../components/ButtonComponent/ButtonContainerComponent";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate  } from "react-router-dom";
import * as utilities from '../../utils/utilities';
import {hasNoError, getLocalStorage} from '../../utils/utilities';
import { defaultSignInInput } from '../../store/constants';
import { signInActions } from '../../store/signInSlice';

const SigninForm = () => {
  const input = useSelector((state) => state.signInSlice);
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  let payload;

const inputChange = (e) => {
    switch (e.target.name) {
      case "userEmail": 
            payload = utilities.userEmailChangeHandler(e.target.value);
            dispatch(signInActions.userEmail(payload));
            break;
      case "userPassword": 
            payload = utilities.passwordChangeHandler(e.target.value);            
            dispatch(signInActions.userPassword(payload));
            break;
      default:
            return '';
    }
}

const registerHandler = (event) => {   
    event.preventDefault();
    dispatch(signInActions.inputClear(defaultSignInInput)); 
    navigate('/register');
}

const signinHandler = (data,event) => {
    event.preventDefault();  
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
                alert("Kindly Register");
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

const buttonClick = (e) => {
  e.target.value === "Sign in" ? signinHandler(input,e) :registerHandler(e);
}

  return (
    <div className="form">
      <h2>Sign in</h2>
      <InputComponent name={"userEmail"}
        type={"email"}
        placeholder={"Email"}
        value={input.userEmail.value}
        inputChange={inputChange}
      />
       {input.userEmail.error && (
        <ErrorComponent message={"Invalid Email"} />
      )}
      <InputComponent name={"userPassword"}
        type={"password"}
        placeholder={"Password"}
        value={input.userPassword.value}
        inputChange={inputChange}
      />
       {input.userPassword.error && (
        <ErrorComponent message={"Password must contain 8 characters"} />
      )}
      
      <ButtonContainerComponent>
        <ButtonComponent
          className="primary"
          value="Sign in"
          buttonClick = {buttonClick}
        />
        <ButtonComponent
          className="secondary"
          value="Register"
          buttonClick = {buttonClick}
        />
      </ButtonContainerComponent>

    </div>
  );
};
export default SigninForm;
