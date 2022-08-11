import styles from '../css/signup.module.css';
import AsideImage from '../components/AsideImage/AsideImage';
import SignupForm from '../components/SignupForm';

const Signup = () => {
    
    return (
        <section className={styles.signup}>
        <div className={styles.card}>
            <SignupForm/>
            <AsideImage/>
        </div>
        </section>
    );

}
export default Signup;