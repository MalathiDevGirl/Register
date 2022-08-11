import Input from "../components/Input/Input";
import ButtonContainer from "../components/Button/ButtonContainer";
import '../css/input.css';

const SignupForm = () => {
    return (<div className="form">
        <h2>Registration</h2>
        <Input type={"text"} name={"name"} placeholder={"Name"}/>
        <Input type={"date"} name={"date"} placeholder={"Date"} />
        <p>Please select Gender</p>
        <Input type={"radio"} name={"gender"} placeholder={"Male"} />
        <Input type={"radio"} name={"gender"} placeholder={"Female"} /><br/><br/>
        <Input type={"email"} name={"email"} placeholder={"Email"} />
        <Input type={"password"} name={"password"} placeholder={"Password"} />
        <Input type={"password"} name={"confirmPassword"} placeholder={"Confirm Password"} />
        <ButtonContainer primaryValue={"Register"} secondaryValue={"Sign in"}/>
    </div>);
}
export default SignupForm;