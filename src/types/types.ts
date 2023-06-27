export type TSidebarContext = {
  activeButtonTitle: string;
  changeActiveButtonTitle: (newActiveButtonTile: string) => void;
};

export type TCardContext = {
  id: number;
  title: string;
  imageUrl: string;
};

export type TDrinksList = {
  drinks: {
    idDrink: number;
    strDrink: string;
    strDrinkThumb: string;
  }[];
};
