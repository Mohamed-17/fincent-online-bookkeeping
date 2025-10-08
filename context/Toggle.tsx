"use client";
import React, { createContext, useState, useContext } from "react";

interface ThemeContextType {
  theme: string;
  setTheme: (theme: string) => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

function Toggle({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<string>("dark");
  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a Toggle provider");
  }
  return context;
};

export default Toggle;
