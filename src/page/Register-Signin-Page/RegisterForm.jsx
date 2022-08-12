import InputComponent from "../../components/InputComponent/InputComponent";
import ButtonContainerComponent from "../../components/ButtonComponent/ButtonContainerComponent";
import ErrorComponent from "../../components/ErrorComponent/ErrorComponent";
import { useSelector } from "react-redux";
import './style.css';

const RegisterForm = () => {      
    const input = useSelector((state) => state);

    return (<div className="form">
        <h2>Registration</h2>
        <InputComponent type={"text"} name={"name"} placeholder={"Name"}/>
        {(input.name.error && <ErrorComponent message={"Name must not be empty"} />)}
      
       <InputComponent type={"date"} name={"date"} placeholder={"Date"} />
        {(input.date.error && <ErrorComponent message={"Date must be before today"} />)}
        
        <p>Please select Gender</p>
        <InputComponent type={"radio"} name={"gender"} placeholder={"Male"} />
        <InputComponent type={"radio"} name={"gender"} placeholder={"Female"} /><br/>
        
        <InputComponent type={"email"} name={"email"} placeholder={"Email"} />
        {(input.email.error && <ErrorComponent message={"Invalid Email"} />)}
        
        <InputComponent type={"password"} name={"password"} placeholder={"Password"} />
        {(input.password.error && <ErrorComponent message={"Password must contains 8 characters"} />)}
        
        <InputComponent type={"password"} name={"confirmPassword"} placeholder={"Confirm Password"} />
        {(input.confirmPassword.error && <ErrorComponent message={"Password not matched"} />)}
        
        <ButtonContainerComponent primaryValue={"Register"} secondaryValue={"Sign in"}/>
    </div>);
}
export default RegisterForm;