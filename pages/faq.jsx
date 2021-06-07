import { Container, Typography } from "@material-ui/core";
import styles from "./../styles/faq/faq.module.css";

const Faq = () => {
  return (
    <div className={styles.faq}>
      <div className={styles.faq_heading}>
        <Typography>FAQ</Typography>
      </div>

      <Container>
        <div className={styles.faq_content}>
          <div className={styles.faq_content_main}>
            <Typography variant="h6">Canceled Order</Typography>
            <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porta in in sapien nullam erat. Mauris.</Typography>
          </div>
          <div className={styles.faq_content_main}>
            {" "}
            <Typography variant="h6">Can i use token for other purchase</Typography>
            <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porta in in sapien nullam erat. Mauris.</Typography>
          </div>
          <div className={styles.faq_content_main}>
            {" "}
            <Typography variant="h6">Canceled Order</Typography>
            <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porta in in sapien nullam erat. Mauris.</Typography>
          </div>
          <div className={styles.faq_content_main}>
            {" "}
            <Typography variant="h6">Canceled Order</Typography>
            <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porta in in sapien nullam erat. Mauris.</Typography>
          </div>
          <div className={styles.faq_content_main}>
            {" "}
            <Typography variant="h6">Canceled Order</Typography>
            <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porta in in sapien nullam erat. Mauris.</Typography>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Faq;
