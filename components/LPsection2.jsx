import { Container, Grid, Button } from "@material-ui/core";
import styles from "./../styles/home/LPsection2.module.css";
import mock from "./../images/mock1.svg";
import ellpse16 from "./../images/Ellipse 16.svg";

const LpSection2 = () => {


  return (
    <div className={styles.lp_section2}>
      <Container maxWidth="lg" className={styles.lpsection2_container}>
        <div className={styles.lp_section2_content}>
          <Grid container spacing={3} className={styles.lpsection2_grid}>
            <Grid item xs={12} md={8}>
              <div className={styles.lpsection2_left_content}>
                <div className={styles.phone_mock}>
                  <img src={mock} alt="" />
                </div>
                <div className={styles.ellipse16}>
                  <img src={ellpse16} alt="" />
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={styles.lpsection2_right_content}>
                <Button variant="contained">SIGN UP TO BE A RIDER</Button>
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default LpSection2;
