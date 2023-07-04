import React from "react";
import { useDetailedCardContext } from "../../hooks/useDetailedCardContext";

function DetailedCardIngredients() {
  const data = useDetailedCardContext();

  return (
    <div>
      <h3 className="mb-2">Ingredients</h3>
      <ul className="list-disc text-xs pl-8">
        {data &&
          Object.keys(data).map((key) => {
            if (key.startsWith("strIngredient") && data[key] !== null) {
              return (
                <li key={data[key]}>
                  {data[key]} {data[key.replace("strIngredient", "strMeasure")]}
                </li>
              );
            }
            return null;
          })}
      </ul>
    </div>
  );
}

export default DetailedCardIngredients;
