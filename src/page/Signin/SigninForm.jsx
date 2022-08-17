import ButtonContainerComponent from "../../components/ButtonComponent/ButtonContainerComponent";
import InputComponent from "../../components/InputComponent/InputComponent";
import { useSelector } from "react-redux";
import "../style.css";
import ErrorComponent from "../../components/ErrorComponent/ErrorComponent";

const SigninForm = () => {
  const input = useSelector((state) => state.signInSlice);
  return (
    <div className="form">
      <h2>Sign in</h2>
      <InputComponent
        type={"email"}
        name={"userEmail"}
        placeholder={"Email"}
        value={input.userEmail.value}
      />
       {input.userEmail.error && (
        <ErrorComponent message={"Invalid Email"} />
      )}
      <InputComponent
        type={"password"}
        name={"userPassword"}
        placeholder={"Password"}
        value={input.userPassword.value}
      />
       {input.userPassword.error && (
        <ErrorComponent message={"Password must contain 8 characters"} />
      )}
      <ButtonContainerComponent
        primaryValue={"Sign in"}
        secondaryValue={"Register"}
      />
    </div>
  );
};
export default SigninForm;
