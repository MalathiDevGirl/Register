import styles from './signup.module.css';
import signupImages from '../../assests/background.webp';
const Signup = () => {
    const registerHandler = () => {
    }
    const signinHandler = () => {

    }
    return (
        <section className={styles.signup}>
        <div className={styles.card}>
            <div className={styles.form}>
                <h2>Registration</h2>
                <div className={styles.label}> 
                    <label for="name"> Name </label>
                </div>
                <div className={styles.input}> 
                    <input type="text" id="name" name="name"/>
                </div>
                <div className={styles.label}> 
                  <label for="dateofbirth"> Date of Birth </label>
                </div>
                <div className={styles.input}>                 
                    <input type="date" id="dateofbirth" name="dateofbirth" />
                </div>
                <div className={styles.label}> 
                    <p>Please select your gender</p>
                </div>
                <div className={styles.input}> 
                    <input type="radio" id="male" name="male" value="Male"/>
                    <label for="male">Male</label>
                    <input type="radio" id="female" name="female" value="Female"/>
                    <label for="female">Female</label>
                </div>
                <div className={styles.label}> 
                    <label for="email"> Email </label>
                </div>
                <div className={styles.input}>                    
                    <input type="email" id="email" name="email" />
                </div>
                <div className={styles.label}> 
                    <label for="password"> Password </label>
                </div>
                <div className={styles.input}>                    
                    <input type="password" id="password" name="password"/>
                </div>
                <div className={styles.label}> 
                    <label for="confirmPassword"> Confirm Password </label>
                </div>
                <div className={styles.input}>                     
                    <input type="password" id="confirmPassword" name="confirmPassword"/>
                </div>
                <button onClick={registerHandler}>Register</button>
                <button onClick={signinHandler}>Sign in</button>
            </div>
            <div>
                <img className={styles.formImage} src={signupImages} alt="Signup Images"></img>
            </div>
        </div>
        </section>
    );

}
export default Signup;