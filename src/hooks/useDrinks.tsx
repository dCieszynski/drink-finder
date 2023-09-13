/* eslint-disable import/prefer-default-export */

import { useCallback, useEffect, useState } from "react";
import { TDrinksList, TFilter } from "../types/types";

export const useDrinks = (filter: TFilter, searchStr: string) => {
  const [drinksList, setDrinksList] = useState<TDrinksList | null>(null);

  const fetchDrinks = useCallback(async () => {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${filter}`);
    if (response && response.ok) {
      const data = await response.json();
      setDrinksList(data);
    }
  }, [filter]);

  const fetchSearchedDrinks = useCallback(async () => {
    const respone = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchStr}`);
    if (respone && respone.ok) {
      const data = await respone.json();
      setDrinksList(data);
    } else {
      setDrinksList(null);
    }
  }, [searchStr]);

  useEffect(() => {
    if (searchStr.length === 0) fetchDrinks();
    else fetchSearchedDrinks();
  }, [fetchDrinks, fetchSearchedDrinks, searchStr.length]);

  return drinksList;
};
