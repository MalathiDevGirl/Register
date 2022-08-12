import './input.style.css';
import { registerActions } from '../../store/inputSlice';
import * as utilities from '../../utils/utilities';
import { useDispatch } from "react-redux";

const InputComponent  = (props) => {
    const dispatch = useDispatch();
    let payload;

    const updateValue = (e) => {
       switch(e.target.name){
        case "name":      
            payload = utilities.nameChangeHandler(e.target.value);            
            dispatch(registerActions.name(payload));
            break;
        case "date": 
            payload = utilities.dateChangeHandler(e.target.value);            
            dispatch(registerActions.date(payload));
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

    return (
        <div className="input-container">
            <label htmlFor={`${props.name}`}>{`${props.placeholder}`}
                <input type={`${props.type}`} id={`${props.name}`} name={`${props.name}`} placeholder={`${props.placeholder}`} value={props.value} onChange={updateValue}/>
            </label>
        </div>);
}
export default InputComponent;