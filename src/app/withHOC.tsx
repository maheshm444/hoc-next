"use client";
import React, { useState } from "react";

const withHOC = (Component: React.ReactElement) => {
  return (props) => {
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
