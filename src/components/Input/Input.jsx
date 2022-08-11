import '../../css/input.css';
import { useState } from 'react';
const Input  = (props) => {
    const [inputValue, setInputValue] = useState("");
    const updateValue = (e) => {
        setInputValue(e.target.value)
    }
    return (<label htmlFor={`${props.name}`}>{`${props.placeholder}`}
        <input type={`${props.type}`} id={`${props.name}`} name={`${props.name}`} placeholder={`${props.placeholder}`} value={inputValue} onChange={updateValue}/>
    </label>);
}
export default Input;