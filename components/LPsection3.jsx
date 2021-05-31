import { Container, Typography, Grid } from "@material-ui/core";
import styles from "./../styles/LPsection3.module.css";
import easy from "./../images/phone (2).svg";
import fast from "./../images/fast.svg";
import cheap from "./../images/cheap.svg";
import mock from "./../images/mock1.svg";
import ellipse17 from "./../images/Ellipse 17.svg";

const LpSection3 = () => {
  return (
    <div className={styles.lp_section3}>
      <Container maxWidth="lg" className={styles.lpsection3_container}>
        <div className={styles.lp_section3_content}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <div className={styles.lpsection3_left_content}>
                <div className={styles.easy}>
                  <div className={styles.easy_img}>
                    <img src={easy} alt="" />
                  </div>

                  <div className={styles.easy_text}>
                    <Typography variant="h6">Easy To Use</Typography>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur
                    </Typography>
                  </div>
                </div>
                <div className={styles.fast}>
                  <div className={styles.fast_img}>
                    <img src={fast} alt="" />
                  </div>

                  <div className={styles.fast_text}>
                    <Typography variant="h6">Fast</Typography>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur
                    </Typography>
                  </div>
                </div>
                <div className={styles.cheap}>
                  <div className={styles.cheap_img}>
                    <img src={cheap} alt="" />
                  </div>

                  <div className={styles.cheap_text}>
                    <Typography variant="h6">Cheap</Typography>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur
                    </Typography>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={8}>
              <div className={styles.lpsection3_right_content}>
                <div className={styles.ellipse17}>
                  <img src={ellipse17} alt="" />
                  <div className={styles.phone_mock}>
                    <img src={mock} alt="" />
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default LpSection3;
