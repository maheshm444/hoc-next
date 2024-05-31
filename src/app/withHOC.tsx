"use client";
import React, { useState } from "react";

const withHOC = (Component: any) => {
  return (props: any) => {
    const [theme, setTheme] = useState("dark");
    return (
      <Component
        {...props}
        theme={theme}
        setCustomTheme={() => setTheme(theme === "dark" ? "light" : "dark")}
      />
    );
  };
};

export default withHOC;
