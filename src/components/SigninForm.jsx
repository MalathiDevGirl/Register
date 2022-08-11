import Input from "./Input/Input";
import ButtonContainer from "./Button/ButtonContainer";
import '../css/input.css';

const SigninForm = () => {
    return (<div className="form">
        <h2>Sign in</h2>
        <Input type={"email"} name={"email"} placeholder={"Email"} />
        <Input type={"password"} name={"password"} placeholder={"Password"} />
        <ButtonContainer primaryValue={"Sign in"} primaryClass={"primary"} secondaryValue={"Register"} secondaryClass={"secondary"}/>
    </div>);
}
export default SigninForm;