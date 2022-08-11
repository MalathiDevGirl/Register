import styles from '../css/signup.module.css';
import AsideImage from '../components/AsideImage/AsideImage';
import SigninForm from '../components/SigninForm';

const Signin = () => {
    
    return (
        <section className={styles.signup}>
        <div className={styles.card}>
            <SigninForm/>
            <AsideImage/>
        </div>
        </section>
    );

}
export default Signin;