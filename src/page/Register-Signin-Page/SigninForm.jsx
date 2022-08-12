import ButtonContainerComponent from "../../components/ButtonComponent/ButtonContainerComponent";
import InputComponent from "../../components/InputComponent/InputComponent";
import { useSelector } from "react-redux";
import './style.css';

const SigninForm = () => {       
    const input = useSelector((state) => state);

    return (<div className="form">
        <h2>Sign in</h2>
        <InputComponent type={"email"} name={"email"} placeholder={"Email"} value={input.email.value}/>
        <InputComponent type={"password"} name={"password"} placeholder={"Password"} value={input.password.value}/>
        <ButtonContainerComponent primaryValue={"Sign in"} primaryClass={"primary"} secondaryValue={"Register"} secondaryClass={"secondary"}/>
    </div>);
}
export default SigninForm;