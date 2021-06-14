import styles from "./../styles/about/About.module.css";
import { Container, Grid, Typography } from "@material-ui/core";
import LpSection5 from "./../components/LPsection5";
import arrow from "./../images/arrow.svg";
import visionimg from "./../images/vision-img.png";
import missionimg from "./../images/mission-img.png";
import { useEffect, useContext } from "react";
import { DataCentral } from './../components/context';

const About = () => {
  const {open, setOpen, handleAsideOpen} = useContext(DataCentral)



 useEffect(() => {
   setOpen(false)

  }, [])




  return (
    <div className={styles.about}>
      <Container>
        <div className={styles.about_content}>
          <div className={styles.about_heading}>
            <Typography>About Us</Typography>
          </div>
          <div className={styles.about_main_content}>
            <Grid container spacing={3} className={styles.vision_grid}>
              <Grid item xs={12} sm={6}>
                <div className={styles.about_vision_content}>
                  <div className={styles.about_vision_heading}>
                    <Typography>OUR VISION</Typography>
                  </div>
                  <div className={styles.about_vision_para}>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Porta in in sapien nullam erat. Mauris.
                    </Typography>
                  </div>
                  <div className={styles.about_vision_btn}>
                    <Typography>
                                          Learn more
                                           
                    </Typography>
                                       <span>
                        <img src={arrow} alt="" />
                      </span>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} sm={6}>
                <div className={styles.about_vision_img}>
                  <img src={visionimg} alt="vision image" />
                </div>
              </Grid>
            </Grid>

            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                {" "}
                <div className={styles.about_mission_img}>
                  <img src={missionimg} alt="mission image" />
                </div>
              </Grid>
              <Grid item xs={12} sm={6}>
                <div className={styles.about_mission_content}>
                  <div className={styles.about_mission_heading}>
                    <Typography>OUR VISION</Typography>
                  </div>
                  <div className={styles.about_mission_para}>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Porta in in sapien nullam erat. Mauris.
                    </Typography>
                  </div>
                  <div className={styles.about_mission_btn}>
                    <Typography>
                                          Learn more
                                           
                    </Typography>
                                   <span>
                        <img src={arrow} alt="" />
                      </span>     
                  </div>
                </div>
              </Grid>
            </Grid>
            <LpSection5 />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
