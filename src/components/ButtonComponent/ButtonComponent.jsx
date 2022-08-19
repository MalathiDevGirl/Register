import './button.style.css';

const ButtonComponent = (props) => {  
    return (
       <button className={`${props.className}`} value={`${props.value}`} onClick={props.buttonClick}>
            {props.value}
        </button>
    );

}
export default ButtonComponent;