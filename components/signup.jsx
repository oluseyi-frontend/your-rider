import styles from "./../styles/login/login.module.css";
import { Container, Typography, Button } from "@material-ui/core";
import fb from "./../images/fb.svg";
import twitter from "./../images/twitter.svg";
import google from "./../images/google .svg";
const Signup = () => {
  return (
    <div className={styles.form_main}>
      <label htmlFor="">
        NAME
        <input type="text" />
      </label>
      <label htmlFor="">
        EMAIL
        <input type="text" />
      </label>
      <label htmlFor="">
        PASSWORD
        <input type="text" />
      </label>
      <div className={styles.form_btn}>
        <button>Sign Up</button>
      </div>
    </div>
  );
};

export default Signup;
