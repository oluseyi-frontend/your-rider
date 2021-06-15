import styles from "./../styles/login/login.module.css";
import { Container, Typography, Button } from "@material-ui/core";
import fb from "./../images/fb.svg";
import twitter from "./../images/twitter.svg";
import google from "./../images/google .svg";
import { useState } from "react";
import Signup from "../components/signup";
import { useEffect, useContext } from "react";
import { DataCentral } from './../components/context';
const Login = () => {
  const [active, setActive] = useState(false);
  const [loginActive, setLoginActive] = useState(true);
  const [formToggler, setFormToggler] = useState(false);
const {open, setOpen, handleAsideOpen} = useContext(DataCentral)



 useEffect(() => {
   setOpen(false)

 }, [])
  
  
  const handleLoginComponent = () => {
    setLoginActive(true);
    setActive(false);
  };

  const handleSignupComponent = () => {
    setLoginActive(false);
    setActive(true);
  };

  return (
    <div className={styles.user_form}>
      <div className={styles.page_underlay}>
        <Container className={styles.my_container}>
          <div className={styles.page_content}>
            <form action="">
              <div className={styles.form_heading}>
                <Button
                  onClick={handleSignupComponent}
                  className={active ? styles.signup_active : styles.signup_btn}
                >
                  SIGNUP
                </Button>
                <Button
                  onClick={handleLoginComponent}
                  className={
                    loginActive ? styles.login_active : styles.login_btn
                  }
                >
                  LOGIN
                </Button>
              </div>
              {loginActive && (
                <div className={styles.form_main}>
                  <label htmlFor="">
                    EMAIL
                    <input type="text" />
                  </label>
                  <label htmlFor="">
                    PASSWORD
                    <input type="text" />
                  </label>
                  <div className={styles.form_btn}>
                    <button>Login</button>
                  </div>
                </div>
              )}

              {active && <Signup />}
              <div className={styles.sm_links}>
                <div className={styles.fb}>
                  <img src={fb} alt="" />
                </div>
                <div className={styles.twitter}>
                  <img src={twitter} alt="" />
                </div>
                <div className={styles.google}>
                  <img src={google} alt="" />
                </div>
              </div>
            </form>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Login;
