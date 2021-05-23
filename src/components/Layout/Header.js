import React from "react";
import CartButton from "../Cart/CartButton";
import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>Mi cocina mexicana</h1>
        <CartButton onClick={props.onCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="tacos de carne asada" />
      </div>
    </React.Fragment>
  );
};

export default Header;
