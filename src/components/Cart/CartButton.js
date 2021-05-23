import React, { useContext, useEffect, useState } from "react";
import classes from "./CartButton.module.css";
import CartIcon from "./CartIcon";
import CartContext from "../../store/cart-context";

const CartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;
  const numberOfCartItems = items.reduce((currentNum, item) => {
    return currentNum + item.amount;
  }, 0);

  const btnClasses = `${classes.Button} ${
    btnIsHighlighted === true ? classes.bump : ""
  }`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);
    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);
  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes["cart-icon"]}>
        <CartIcon />
      </span>
      <span className={classes["cart-text"]}>Tu Carrito</span>
      <span className={classes["cart-badge"]}>{numberOfCartItems}</span>
    </button>
  );
};

export default CartButton;
