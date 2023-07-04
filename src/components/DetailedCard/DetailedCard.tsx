import React, { PropsWithChildren, ReactNode } from "react";
import { TDrinkDetails } from "../../types/types";
import DetailedCardImage from "./DetailedCardImage";
import DetailedCardCategory from "./DetailedCardCategory";
import DetailedCardContext from "../../hooks/useDetailedCardContext";
import DetailedCardIngredients from "./DetailedCardIngredients";
import DetailedCardInstructions from "./DetailedCardInstructions";
import DetailedCardTitle from "./DetailedCardTitle";
import DetailedCardInfo from "./DetailedCardInfo";

type Props = PropsWithChildren & {
  data: TDrinkDetails;
  info?: ReactNode;
};

const defaultProps = {
  info: undefined,
};

function DetailedCard({ data, info }: Props) {
  return (
    <DetailedCardContext.Provider value={data}>
      <div className="relative">
        <DetailedCard.Image />
        {info}
      </div>
    </DetailedCardContext.Provider>
  );
}

DetailedCard.defaultProps = defaultProps;

DetailedCard.Image = DetailedCardImage;
DetailedCard.Info = DetailedCardInfo;
DetailedCard.Title = DetailedCardTitle;
DetailedCard.Category = DetailedCardCategory;
DetailedCard.Ingredients = DetailedCardIngredients;
DetailedCard.Instructions = DetailedCardInstructions;

export default DetailedCard;
