import React from "react";
import { BiDrink } from "react-icons/bi";
import { MdNoDrinks, MdOutlineLocalDrink } from "react-icons/md";
import Sidebar from "../components/Sidebar/Sidebar";

function Home() {
  return (
    <div className="p-4 min-h-screen text-white bg-gradient-to-br from-background-from to-background-to">
      <h1 className="text-4xl font-castoro-titling flex flex-col gap-2">
        <div>CHOOSE</div>
        <div>YOUR DRINK</div>
      </h1>
      <Sidebar
        content={
          <Sidebar.Content>
            <Sidebar.Button Icon={BiDrink} title="Alcohol" onClick={() => {}} />
            <Sidebar.Button Icon={MdNoDrinks} title="Non-Alcohol" onClick={() => {}} />
            <Sidebar.Button Icon={MdOutlineLocalDrink} title="Optional" onClick={() => {}} />
          </Sidebar.Content>
        }
      />
    </div>
  );
}

export default Home;
