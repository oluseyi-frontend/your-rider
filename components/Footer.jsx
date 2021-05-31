import styles from "./../styles/MytFooter.module.css";
import Link from "next/link";
import fb from "./../images/fb.svg";
import twitter from "./../images/twitter.svg";
import google from "./../images/google .svg";
import insta from "./../images/insta.svg";
import { Container, Typography,FormControl,  OutlinedInput, InputAdornment,  Button } from "@material-ui/core";
const MyFooter = () => {
  return (
    <div className={styles.my_footer}>
      <Container>
        <div className={styles.footer_content}>
          <div className={styles.links}>
            <ul>
              <li>
                {" "}
                <Link href="/">Reviews </Link>
              </li>
              <li>
                {" "}
                <Link href="/">Help</Link>
              </li>
              <li>
                {" "}
                <Link href="/">Returns</Link>
              </li>
              <li>
                {" "}
                <Link href="/">Story</Link>
              </li>
              <li>
                <Link href="/">Partnership</Link>
              </li>
              <li>
                <Link href="/">Refer a Friend</Link>
              </li>
            </ul>
          </div>
          <div className={styles.subscribe}>
             <FormControl className={styles.footer_form_control} variant="outlined">
         
          <OutlinedInput
            id="outlined-adornment-password"
                type='text'
                placeholder='✉  Start Your Journey'
          className={styles.footer_outlined_input}
    
            endAdornment={
              <InputAdornment className={styles.footer_input_adornment} position="end">
                 <Button variant="contained" color="primary">
              Subscribe
            </Button>
              </InputAdornment>
            }
          
          />
            </FormControl>
            

            {/* <input type="text" placeholder=" ✉  Start Your Journey" />
            <Button variant="contained" color="primary">
              Subscribe
            </Button> */}
          </div>
          <div className={styles.sm_links}>
                      <div>
                          <Link href='/'>
                          <img src={fb} alt="" />
                          </Link>
              
            </div>
            <div>
              <img src={twitter} alt="" />
            </div>
            <div>
              <img src={google} alt="" />
            </div>
            <div>
              <img src={insta} alt="" />
            </div>
          </div>
          <div className={styles.shocker}>
                      <Typography>
                          © yourride.com. All rights reserved. The best time to tell  <br /> someone
            about us is now. The second best time is right now!!  
              </Typography>
          
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MyFooter;
