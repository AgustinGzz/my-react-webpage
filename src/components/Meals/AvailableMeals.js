import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const MENU = [
  {
    id: "m1",
    name: "Tacos de bistek (orden de 5)",
    description:
      "Tradicional, completos con todo lo que debe traer un taco, guacamole, pico de gallo y la mejor salsa de la galaxia",
    price: 19.99,
  },
  {
    id: "m2",
    name: "Tacos de barbacoa (orden de 5)",
    description:
      "Con grasa de la buena! y con salsa que te va a revivir de esa crudota.",
    price: 19.99,
  },
  {
    id: "m3",
    name: "Cabrito",
    description:
      "Entero! y a las brasas, nada mas delicioso y jugoso, para 4+ personas",
    price: 99.99,
  },
  {
    id: "m4",
    name: "Hamburguesa de sirloin",
    description:
      "Con papas a la francesa y un chile serrano toreado, para amarrar!",
    price: 24.99,
  },
];

const AvailableMeals = () => {
  const menuList = MENU.map((item) => (
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
