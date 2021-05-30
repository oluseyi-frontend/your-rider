import styles from "./../styles/Navbar.module.css";
import Link from "next/link";
import { Container, Button } from "@material-ui/core";
import Image from "next/image";
import logo from "./../images/logo 2 2 (1).svg";
import MenuIcon from "@material-ui/icons/Menu";
import { useState } from "react";
import SideNav from "./SideNav";

const Navbar = () => {
const [open, setOpen] = useState(false)


    const handleAsideOpen = () => {
        setOpen(!open)
    }
  return (
    <nav className={styles.my_nav}>
      <Container maxWidth="lg">
        <div className={styles.nav_content}>
          <div className={styles.logo}>
            <img src={logo} alt="logo" />
          </div>
          <div className={styles.menu_open}>
                      <MenuIcon onClick={handleAsideOpen}/>
          </div>

          <div className={styles.links}>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>

            <Link href="faq">FAQ</Link>

            <Button variant="outlined" color="primary" href="#outlined-buttons">
             Login
            </Button>
            <Button variant="contained" color="primary">
             Get Your Ride
            </Button>
          </div>
        </div>
          </Container>
          <SideNav open={open} setOpen={setOpen}/>
    </nav>
  );
};

export default Navbar;