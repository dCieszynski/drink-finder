import React from "react";
import { BiDrink } from "react-icons/bi";
import { MdNoDrinks, MdOutlineLocalDrink } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";
import List from "../components/List/List";

const links = [
  {
    Icon: AiFillHome,
    to: "/",
  },
];

function Home() {
  return (
    <div className="p-4 min-h-screen text-white bg-gradient-to-br from-background-from to-background-to">
      <h1 className="pl-16 text-3xl font-castoro flex flex-col gap-2 ">
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
      <div className="ml-16 mt-12">
        <List />
      </div>
      <Navbar
        links={links}
        gap="gap-16"
        action={
          <Navbar.Action gap="gap-16">
            <Navbar.Search />
          </Navbar.Action>
        }
      />
    </div>
  );
}

export default Home;
