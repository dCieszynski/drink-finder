import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { useDrink } from "../hooks/useDrink";
import HomeButton from "../components/HomeButton/HomeButton";
import DetailedCard from "../components/DetailedCard/DetailedCard";

function DrinkDetails() {
  const { id } = useParams();
  const drink = useDrink(Number(id));

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-background-from to-background-to flex justify-center">
      {drink?.drinks === null && <Navigate replace to="/" />}
      {drink && (
        <div>
          <HomeButton />
          <DetailedCard
            data={drink.drinks[0]}
            info={
              <DetailedCard.Info>
                <DetailedCard.Title />
                <DetailedCard.Category />
                <DetailedCard.Ingredients />
                <DetailedCard.Instructions />
              </DetailedCard.Info>
            }
          />
        </div>
      )}
    </div>
  );
}

export default DrinkDetails;
