import InputComponent from "../../components/InputComponent/InputComponent";
import ButtonContainerComponent from "../../components/ButtonComponent/ButtonContainerComponent";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import ErrorComponent from "../../components/ErrorComponent/ErrorComponent";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate  } from "react-router-dom";
import { registerActions } from '../../store/registerSlice';
import { defaultRegisterInput } from '../../store/constants';
import {hasNoError, getLocalStorage, setLocalStorageItem} from '../../utils/utilities';
import * as utilities from '../../utils/utilities';

//import { useParams } from 'react-router-dom';
import "../style.css";

const listOfGenders = ['Female', 'Male'];

const RegisterForm = () => {
  const input = useSelector((state) => state.registerSlice);
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  let payload;
  //let  {id}  = useParams();
  //console.log(id);
  // console.log(getLocalStorageSingleItem("existingData",id));

  const inputChange = (e) => {
    switch (e.target.name) {
      case "name":
        payload = utilities.nameChangeHandler(e.target.value);
        dispatch(registerActions.name(payload));
        break;
      case "date":
        payload = utilities.dateChangeHandler(e.target.value);
        dispatch(registerActions.date(payload));
        break;
      case "gender":
        payload = utilities.genderChangeHandler(e.target.value);
        dispatch(registerActions.gender(payload));
        break;
      case "email":
        payload = utilities.emailChangeHandler(e.target.value);
        dispatch(registerActions.email(payload));
        break;
      case "password":
        payload = utilities.passwordChangeHandler(e.target.value);
        dispatch(registerActions.password(payload));
        break;
      case "confirmPassword":
        payload = utilities.confirmPasswordChangeHandler(e.target.value);
        dispatch(registerActions.confirmPassword(payload));
        break;
      default:
        return '';
    }
  }

const registerHandler = (data,event) => {   
    event.preventDefault();    
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
            let existingData =  getLocalStorage("existingData");
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
            }
            setLocalStorageItem("entryData", entryData);
            existingData.push(entryData);
            setLocalStorageItem("existingData", existingData);
            dispatch(registerActions.inputClear(defaultRegisterInput));    
            navigate('/') 
        } 
}

const signinHandler = (event) => {
    event.preventDefault();  
    dispatch(registerActions.inputClear(defaultRegisterInput)); 
    navigate('/');
}

const buttonClick = (e) => {
    e.target.value === "Sign in" ? signinHandler(e) :registerHandler(input,e);
}

  return (
    <div className="form">
      <h2>Registration</h2>
      <InputComponent name={"name"}
        type={"text"}
        placeholder={"Name"}
        value={input.name.value}
        inputChange={inputChange} />
      {input.name.error && (
        <ErrorComponent message={"Name must not be empty"} />
      )}

      <InputComponent name={"date"}
        type={"date"}
        placeholder={"Date"}
        value={input.date.value}
        inputChange={inputChange}
      />
      {input.date.error && (
        <ErrorComponent message={"Date must be before today"} />
      )}

      <p>Please select Gender</p>
      {listOfGenders.map((genderValue) => {
        return <InputComponent key={genderValue} type={"radio"} name={"gender"} placeholder={genderValue} value={genderValue} inputChange={inputChange}
        />
      })}
      <br />

      <InputComponent name={"email"}
        type={"email"}
        placeholder={"Email"}
        value={input.email.value}
        inputChange={inputChange}
      />
      {input.email.error && (
        <ErrorComponent message={"Emai is already exists"} />
      )}

      <InputComponent name={"password"}
        type={"password"}
        placeholder={"Password"}
        value={input.password.value}
        inputChange={inputChange}
      />
      {input.password.error && (
        <ErrorComponent message={"Password must contains 8 characters"} />
      )}

      <InputComponent name={"confirmPassword"}
        type={"password"}
        placeholder={"Confirm Password"}
        value={input.confirmPassword.value}
        inputChange={inputChange}
      />
      {input.confirmPassword.error && (
        <ErrorComponent message={"Password not matched"} />
      )}

      <ButtonContainerComponent>
        <ButtonComponent
          className="primary"
          value="Register"
          buttonClick = {buttonClick}
        />
        <ButtonComponent
          className="secondary"
          value="Sign in"
          buttonClick = {buttonClick}
        />
      </ButtonContainerComponent>
    </div>
  );
};
export default RegisterForm;
