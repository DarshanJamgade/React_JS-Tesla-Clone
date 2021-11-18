import React, { useState } from "react";
import classes from "./header.module.scss";

import { BiX } from "react-icons/bi";
const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar((prevState) => !prevState);
  };
  return (
    <header className={classes.container}>
      <div className={classes.logo}>
        <a href="/">
          <img src="/assets/logo.svg" alt="tesla logo" />
        </a>
      </div>
      <div className={classes.menu}>
        <a href="/">Model S</a>
        <a href="/">Model 3</a>
        <a href="/">Model X</a>
        <a href="/">Model Y</a>
        <a href="/">Solar Roof</a>
        <a href="/">Solar Panels</a>
      </div>
      <div className={(classes.menu, classes.rightMenu)}>
        <a href="/">Shop</a>
        <a href="/">Account</a>
        <a href="#" onClick={toggleSidebar}>
          Menu
        </a>
      </div>
      {showSidebar ? (
        <div className={classes.sidebar}>
          <li>
            <BiX
              size="32px"
              className={classes.close}
              onClick={toggleSidebar}
            />
            <a href="/">Model S</a>
            <a href="/">Model 3</a>
            <a href="/">Model X</a>
            <a href="/">Model Y</a>
            <a href="/">Solar Roof</a>
            <a href="/">Solar Panels</a>
            <a href="/">Existing Inventory</a>
            <a href="/">Used Inventory</a>
          </li>
        </div>
      ) : null}
    </header>
  );
};

export default Header;
