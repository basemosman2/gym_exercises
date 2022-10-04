import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Stack } from "@mui/system";
import Logo from "../assets/images/Logo.png";
import classes from "../style/Navbar.module.css";

const Navbar = () => {
  return (
    <Stack
      direction="row" alignItems='center'
      sx={{ gap: { sm: "144px", xs: "40px" }, mt: { sm: "32px", xs: "20px" }}} px='20px'
    >
      <Link to="/">
        <img src={Logo} alt="logo" className={classes.logo} />
      </Link>
      <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
        <Link to="/" className={classes.homeLink}>
          Home
        </Link>
        <a href="#exercise" className={classes.exerciseLink}>
          Exercise
        </a>
      </Stack>
    </Stack>
  );
};

export default Navbar;
