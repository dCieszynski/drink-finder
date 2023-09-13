import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useDrinksContext } from "../../context/DrinksContext";

function NavbarSearch() {
  const drinksContext = useDrinksContext();
  const [isInputDisplayed, setIsInputDisplayed] = useState(false);

  const changeInputDisplay = () => {
    setIsInputDisplayed(!isInputDisplayed);
  };

  const updateInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    drinksContext?.setSearchInput(e.target.value);
  };

  return (
    <div className="flex items-center gap-2">
      <button type="button" onClick={changeInputDisplay}>
        <AiOutlineSearch />
      </button>
      {drinksContext !== null && isInputDisplayed && (
        <input
          type="text"
          className="text-black p-2 rounded text-sm w-28 focus:outline focus:outline-2 focus:outline-active-yellow"
          onChange={(e) => updateInputValue(e)}
          value={drinksContext.searchInput}
        />
      )}
    </div>
  );
}

export default NavbarSearch;
