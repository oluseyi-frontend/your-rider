import styles from "./../styles/home/SideNav.module.css";
import Link from "next/link";
import { Container, Button } from "@material-ui/core";
import Image from "next/image";
import logo from "./../images/logo 2 2 (1).svg";
import CloseIcon from "@material-ui/icons/Close";
const SideNav = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(!open);
  };
  return (
    <aside className={open ? styles.aside_active : styles.my_aside}>
      <Container>
        <div className={styles.aside_content}>
          <div className={styles.upper_content}>
            <div className={styles.logo}>
              <Link href='/'>
              <img src={logo} alt="logo" />
              </Link>
            </div>
            <div className={styles.menu_open}>
              <CloseIcon onClick={handleClose} />
            </div>
          </div>

          <div className={styles.lower_content}>
            <div className={styles.links}>
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>

              <Link href="/faq">FAQ</Link>
              <Link href='/login'>
                <Button variant="outlined" color="primary">
                  Login
                </Button>
              </Link>
              <Link href='/rider'>
              <Button variant="contained" color="primary">
                Get Your Ride
              </Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </aside>
  );
};

export default SideNav;
