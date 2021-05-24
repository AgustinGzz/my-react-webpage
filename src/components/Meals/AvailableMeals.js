import React, { useEffect, useState } from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const AvailableMeals = () => {
  const [menu, setMenu] = useState([]);
  const [loadingState, setLoadingState] = useState(true);
  const [fetchingError, setFetchingError] = useState();

  useEffect(() => {
    const fetchMenuFromBackend = async () => {
      const response = await fetch(
        "https://react-http-d68fa-default-rtdb.firebaseio.com/MENU.json"
      );
      if (!response.ok) {
        throw new Error("Failed to load menu items");
      }
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
      setLoadingState(false);
    };
    fetchMenuFromBackend().catch((error) => {
      //we have to set the loading to false here because the async functio
      //will break once we have an error
      setLoadingState(false);
      setFetchingError(error.message);
      console.log(error);
    });
  }, []);

  const loadingMessage = <p className={classes.loading}>Loading menu...</p>;
  const errorMessage = (
    <p className={classes["fetch-error"]}>{fetchingError}</p>
  );

  const menuList = menu.map((item) => (
    <MealItem
      id={item.id}
      key={item.id}
      name={item.name}
      description={item.description}
      price={item.price}
    />
  ));

  //done this way because i want my messages to be inside the Card component

  return (
    <section className={classes.meals}>
      <Card>
        {loadingState && loadingMessage}
        {fetchingError && errorMessage}
        {!loadingState && !fetchingError && <ul>{menuList}</ul>}
      </Card>
    </section>
  );
};

export default AvailableMeals;
