import './image.style.css';
import signupImages from '../../assests/signup.png';
const ImageComponent = (props) => {
    return (<img className="frontImage" src={signupImages} alt="Signup Images"></img>);
}
export default ImageComponent;