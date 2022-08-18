import InputComponent from "../../components/InputComponent/InputComponent";
import ButtonContainerComponent from "../../components/ButtonComponent/ButtonContainerComponent";
import ErrorComponent from "../../components/ErrorComponent/ErrorComponent";
import { getLocalStorageSingleItem } from '../../utils/utilities';
import { useSelector } from "react-redux";
import { useParams } from 'react-router-dom';

import "../style.css";

const listOfGenders = ['Female','Male'];

const RegisterForm = () => {
  const input = useSelector((state) => state);  
  let  {id}  = useParams();
  console.log(id);
  console.log(getLocalStorageSingleItem("existingData",id));

  return (
    <div className="form">
      <h2>Registration</h2>
      <InputComponent
        type={"text"}
        name={"name"}
        placeholder={"Name"}
        value={input.registerSlice.name.value}
      />
      {input.registerSlice.name.error && (
        <ErrorComponent message={"Name must not be empty"} />
      )}

      <InputComponent
        type={"date"}
        name={"date"}
        placeholder={"Date"}
        value={input.registerSlice.date.value}
      />
      {input.registerSlice.date.error && (
        <ErrorComponent message={"Date must be before today"} />
      )}

      <p>Please select Gender</p>
      {listOfGenders.map((genderValue) => {
         return <InputComponent key={genderValue} type={"radio"} name={"gender"} placeholder={genderValue} value={genderValue}
        />
      })}
      <br/>

      <InputComponent
        type={"email"}
        name={"email"}
        placeholder={"Email"}
        value={input.registerSlice.email.value}
      />
      {input.registerSlice.email.error && (
        <ErrorComponent message={"Emai is already exists"} />
      )}

      <InputComponent
        type={"password"}
        name={"password"}
        placeholder={"Password"}
        value={input.registerSlice.password.value}
      />
      {input.registerSlice.password.error && (
        <ErrorComponent message={"Password must contains 8 characters"} />
      )}

      <InputComponent
        type={"password"}
        name={"confirmPassword"}
        placeholder={"Confirm Password"}
        value={input.registerSlice.confirmPassword.value}
      />
      {input.registerSlice.confirmPassword.error && (
        <ErrorComponent message={"Password not matched"} />
      )}

      <ButtonContainerComponent
        primaryValue={"Register"}
        secondaryValue={"Sign in"}
      />
    </div>
  );
};
export default RegisterForm;
