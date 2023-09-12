import React from "react";
import Card from "../Card/Card";
import { useDrinksContext } from "../../context/DrinksContext";

function List() {
  const drinksData = useDrinksContext();

  return (
    <div className="flex flex-col items-center gap-4 sm:flex-row md:flex-wrap md:justify-center">
      {drinksData ? (
        drinksData.list?.drinks.map((drink) => (
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
