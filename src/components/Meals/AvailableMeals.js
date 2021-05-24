import React, { useEffect, useState } from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const AvailableMeals = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const fetchMenuFromBackend = async () => {
      const response = await fetch(
        "https://react-http-d68fa-default-rtdb.firebaseio.com/MENU.json"
      );
      const responseData = await response.json();

      const loadedMenu = [];

      for (const key in responseData) {
        loadedMenu.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }

      //we have to use state because we must re-render the components which
      //will use the menu data AFTER the information is fetched.
      setMenu(loadedMenu);
    };
    fetchMenuFromBackend();
  }, []);

  const menuList = menu.map((item) => (
    <MealItem
      id={item.id}
      key={item.id}
      name={item.name}
      description={item.description}
      price={item.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{menuList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
