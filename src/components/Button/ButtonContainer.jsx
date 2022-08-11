import '../../css/button.css';
import Button from './Button';
const ButtonContainer = (props) => {
    
    return (<div className="buttonContainer">
        <Button 
            className = {"primary"}
            value = {`${props.primaryValue}`}
            />
        <Button 
            className={"secondary"}
            value = {`${props.secondaryValue}`}
        />
    </div>);
}
export default ButtonContainer;