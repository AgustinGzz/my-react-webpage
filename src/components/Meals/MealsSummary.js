import React from "react";
import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Comida deliciosa, preparada para ti!</h2>
      <p>
        Comida mexicana, a la mexicana, por mexicanos. Selecciona tu platillo
        favorito y disfruta de tu deliciosa comida
      </p>
      <p>
        Todos nuestros platillos son cocinados al punto y se entregan
        calientitos, por cocineros con sazon de la original!
      </p>
    </section>
  );
};

export default MealsSummary;
