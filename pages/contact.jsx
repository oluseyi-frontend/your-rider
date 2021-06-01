import { Container, Grid, Typography } from "@material-ui/core";
import styles from "./../styles/contact/contact.module.css";
import fb from './../images/fb.svg'
import google from './../images/google .svg'
import twitter from './../images/twitter.svg'
const Contact = () => {
    return (
        <div className={styles.contact}>
            <div className={styles.contact_upper_content}>
                <div className={styles.blue_overlay}></div>

                <div className={styles.contact_content}>
                    <Container maxWidth='lg'>
                        <div className={styles.contact_heading}>
                            <Typography variant="h6">Get in Touch</Typography>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Porta
                                in in sapien nullam erat. Mauris.
              </Typography>
                        </div>
                        <div className={styles.contact_lower_content}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} md={7}>
                                    <form action="">
                                        <label htmlFor="">
                                            Name
                      <input type="text" />
                                        </label>
                                        <label htmlFor="">
                                            Email
                      <input type="text" />
                                        </label>
                                        <label htmlFor="">
                                            WRITE MESSAGE
                      <textarea name="" id="" cols="30" rows="10"></textarea>
                                        </label>
                                        <div className={styles.contact_btn}>
                                            <button>send</button>
                                        </div>

                                    </form>
                                </Grid>
                                <Grid item xs={12} md={5} className={styles.contact_card}>
                                    <div className={styles.contact_card_info} >
                                        <div className={styles.contact_info}>
                                            <Typography variant="h5">CONTACT INFO</Typography>
                                            <Typography variant="h6">O8068888888</Typography>
                                            <Typography>info@yourride.gmail com</Typography>
                                        </div>
                                        <div className={styles.contact_sm_links}>
                                            <div className={styles.fb}>
                                                <img src={fb} alt="Facebook" />
                                            </div>
                                            <div className={styles.twitter}>
                                                <img src={twitter} alt="Twitter" />
                                            </div>
                                            <div className={styles.google}>
                                                <img src={google} alt="Google" />
                                            </div>
                                        </div>
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
            </div>
        </div>
    );
};

export default Contact;
