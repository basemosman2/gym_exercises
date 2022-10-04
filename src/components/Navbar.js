import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Stack } from "@mui/system";
import Logo from "../assets/images/Logo.png";
import classes from './Navbar.module.css';

const Navbar = () => {
  return (
    <Stack>
      <Link to='/'>
        <img src={Logo} alt="logo" className={classes.logo} />
      </Link>
        <Stack> 
            <Link to='/' className={classes.homeLink}>Home</Link>
            <a href="#exercise" className={classes.exerciseLink}>Exercise</a>
        </Stack>
    </Stack>
  );
};

export default Navbar;
