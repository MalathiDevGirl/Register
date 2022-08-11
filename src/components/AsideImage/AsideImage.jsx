import styles from '../../css/signup.module.css';
import signupImages from '../../assests/signup.png';

const AsideImage = () => {
    
    return (
        <div>
        <img className={styles.formImage} src={signupImages} alt="Signup Images"></img>
        </div>
    );

}
export default AsideImage;