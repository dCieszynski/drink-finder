import React from "react";
import { useDrinks } from "../../hooks/useDrinks";
import Card from "../Card/Card";

function List() {
  const drinksData = useDrinks("alcoholic");

  return (
    <div className="flex flex-col items-center gap-4 sm:flex-row md:flex-wrap md:justify-center">
      {drinksData ? (
        drinksData.drinks.map((drink) => (
          <Card key={drink.idDrink} data={{ id: drink.idDrink, title: drink.strDrink, imageUrl: drink.strDrinkThumb }}>
            <Card.Background />
            <Card.Header />
          </Card>
        ))
      ) : (
        <div>No drinks found</div>
      )}
    </div>
  );
}

export default List;
