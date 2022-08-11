import styles from '../css/signup.module.css';
import Home from '../components/Home/Home';
const User = () => {
     
    return (
        <section className={styles.signup}>
        <div className={styles.card}>
            <Home/>
        </div>
        </section>
    );
}
export default User;