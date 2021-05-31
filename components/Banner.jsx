import { Container, Grid, withStyles, Typography } from "@material-ui/core";
import styles from "./../styles/home/Banner.module.css";
import appleLogo from "./../images/apple.svg";
import playstoreLogo from "./../images/playstore.svg";
import bannerImg from "./../images/bannerimg2.png";
import ellipse1 from "./../images/Ellipse 13.png";
import ellipse2 from "./../images/Ellipse 14.png";
import ellipse3 from "./../images/Ellipse 15.png";
import ellipse4 from "./../images/Ellipse 12.png";
import { Image } from "next/image";
import Box from '@material-ui/core/Box';
const Banner = () => {
  return (
    <div className={styles.banner}>
      <Container className={styles.banner_container}>
        <div className={styles.banner_content}>
          <Grid container spacing={3}>
            <Box clone order={{ md: 2, lg: 1 }}>
              <Grid item xs={12} md={6}>
                <div className={styles.banner_left_content}>
                  <div className={styles.banner_heading}>
                    <Typography variant="h5">
                      the cheapest & most reliable way to get your package there{" "}
                    </Typography>
                  </div>
                  <div className={styles.banner_para}>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Porta in in sapien nullam erat. Mauris.
                    </Typography>
                  </div>
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
                        <Typography>App Store</Typography>
                      </div>
                    </div>
                  </div>
                </div>
              </Grid>
            </Box>

            <Box clone order={{ md: 1, lg: 2 }}>
              <Grid item xs={12} md={6}>
                <div className={styles.banner_right_content}>
                  <div className={styles.ellipse1}>
                    {" "}
                    <img src={ellipse1} alt="" />
                  </div>
                  <div className={styles.half_ellipse}>
                    {" "}
                    <img src={ellipse2} alt="" />
                  </div>
                  <div>
                    <img src={ellipse3} alt="" />
                  </div>
                  <div className={styles.blue_underlay}>
                    <div className={styles.bike_man}>
                      {" "}
                      <img src={bannerImg} alt="" />
                    </div>
                    <img src={ellipse4} alt="" />{" "}
                  </div>
                </div>
              </Grid>
            </Box>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
