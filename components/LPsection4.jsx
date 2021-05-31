import { Container, Typography, Grid } from "@material-ui/core";
import icon from "./../images/flexible.svg";
import icon1 from "./../images/goods.svg";
import icon2 from "./../images/confirm.svg";
import icon3 from "./../images/flexible.svg";
import styles from "./../styles/home/LPsection4.module.css";

const LpSection4 = () => {
  return (
    <div className={styles.lp_section4}>
      <Container>
        <div className={styles.lp_section4_content}>
          <div className={styles.lpsection4_heading}>
            <Typography variant="h5">WHY CHOOSE US</Typography>
          </div>
          <div className={styles.lpsection4_main}>
            <Grid container spacing={6}>
              <Grid item xs={12} sm={6} md={4}>
                <div className={styles.lpsection4_flexible}>
                  <div className={styles.flexible_heading}>
                                      <img src={icon} alt="" />
                                       <Typography variant="h6">
                      Flexible Payment option
                    </Typography>
                  </div>
                  <div className={styles.flexible_text}>
                   
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Porta in in sapien nullam erat. Mauris.
                    </Typography>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <div className={styles.lpsection4_goods}>
                  <div className={styles.goods_heading}>
                                      <img src={icon1} alt="" />
                                      <Typography variant="h6">Goods Tracking</Typography>
                  </div>
                  <div className={styles.goods_text}>
                    
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Porta in in sapien nullam erat. Mauris.
                    </Typography>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <div className={styles.lpsection4_confirmation}>
                  <div className={styles.confirmation_heading}>
                                      <img src={icon2} alt="" />
                                       <Typography variant="h6">
                      Confirmation Before Payment
                    </Typography>
                  </div>
                  <div className={styles.confirmation_text}>
                   
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Porta in in sapien nullam erat. Mauris.
                    </Typography>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <div className={styles.lpsection4_247}>
                  <div className={styles.two47_heading}>
                                      <img src={icon3} alt="" />
                                      <Typography variant="h6">247 Active Help Line</Typography>
                  </div>
                  <div className={styles.two47_text}>
                    
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Porta in in sapien nullam erat. Mauris.
                    </Typography>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default LpSection4;
