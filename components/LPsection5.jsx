import { Container, Button, Grid, Typography } from "@material-ui/core";
import styles from "./../styles/LPsection5.module.css";
import appleLogo from "./../images/apple.svg";
import playstoreLogo from "./../images/playstore.svg";

const LpSection5 = () => {
  return (
    <div className={styles.lp_section5}>
      <Container>
        <div className={styles.lp_section5_content}>
          <div className={styles.upper_content}>
            <Button variant="contained">SIGN UP TO BE A RIDER</Button>
            <Button variant="contained" color="primary">
              MAKE A DELIVERY
            </Button>
          </div>
          <div className={styles.lower_content}>
            <div className={styles.banner_downloads}>
              <div className={styles.appstore}>
                <img src={appleLogo} alt="" />
                <div>
                  <Typography>Download from </Typography>
                  <Typography>App Store</Typography>
                </div>
              </div>
              <div className={styles.playstore}>
                <img src={playstoreLogo} alt="" />
                <div>
                  <Typography>Download from </Typography>
                  <Typography>Play Store</Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default LpSection5;
