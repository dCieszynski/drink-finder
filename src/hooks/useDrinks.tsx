/* eslint-disable import/prefer-default-export */

import { useCallback, useEffect, useState } from "react";
import { TDrinksList } from "../types/types";

export const useDrinks = (filter: "alcoholic" | "non_alcoholic" | "optional_alcohol") => {
  const [drinksList, setDrinksList] = useState<TDrinksList | null>(null);

  const fetchDrinks = useCallback(async () => {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${filter}`);
    if (response && response.ok) {
      const data = await response.json();
      setDrinksList(data);
    }
  }, [filter]);

  useEffect(() => {
    fetchDrinks();
  }, [fetchDrinks]);

  return drinksList;
};
