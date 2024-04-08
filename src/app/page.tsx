"use client";
import Image from "next/image";
import withHOC from "./withHOC";
import { JSXElementConstructor, ReactElement } from "react";

export interface IHome {
  theme: string;
  setCustomTheme: () => void;
}

const Home = ({
  theme,
  setCustomTheme,
}: IHome): ReactElement<any, string | JSXElementConstructor<any>> => {
  return (
    <div
      className={`${
        theme === "dark" ? "bg-gray-500" : "bg-yellow-50"
      }  p-2 m-10 rounded-md`}
    >
      <p className={`${theme === "dark" ? "text-cyan-100" : "text-black"}`}>
        Home Page with {theme} theme
      </p>
      <button
        className=" text-white rounded-full bg-blue-600 p-3 hover:bg-blue-200 hover:text-gray-950"
        onClick={setCustomTheme}
      >
        Change Theme
      </button>
    </div>
  );
};

export default withHOC(Home);
