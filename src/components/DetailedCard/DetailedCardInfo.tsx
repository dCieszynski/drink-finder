import React, { PropsWithChildren } from "react";

function DetailedCardInfo({ children }: PropsWithChildren) {
  return (
    <div className="-bottom-[240px] xl:-bottom-[0px] w-full min-h-[300px] absolute font-castoro bg-gradient-to-br from-background-from to-background-to text-white flex flex-col gap-2 p-[18px] rounded-t-[18px]">
      {children}
    </div>
  );
}

export default DetailedCardInfo;
