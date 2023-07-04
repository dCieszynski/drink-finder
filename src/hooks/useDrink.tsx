/* eslint-disable import/prefer-default-export */
import { useCallback, useEffect, useState } from "react";
import { TDrink } from "../types/types";

export const useDrink = (id: number) => {
  const [drink, setDrink] = useState<TDrink | null>(null);

  const fetchDrink = useCallback(async () => {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
    if (response && response.ok) {
      const data = await response.json();
      setDrink(data);
    }
  }, [id]);

  useEffect(() => {
    fetchDrink();
  }, [fetchDrink]);

  return drink;
};
