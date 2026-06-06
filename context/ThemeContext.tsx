"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type Theme = "light" | "dark" | "system";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: "light" | "dark";
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setThemeState] = useState<Theme>("system");
  const [resolvedTheme, setResolvedTheme] =
    useState<"light" | "dark">("light");

  const applyTheme = (theme: "light" | "dark") => {
    document.documentElement.classList.toggle(
      "dark",
      theme === "dark"
    );
  };

  useEffect(() => {
    const savedTheme =
      (localStorage.getItem("theme-preference") as Theme) ||
      "system";

    setThemeState(savedTheme);

    const getResolvedTheme = (): "light" | "dark" => {
      if (savedTheme === "system") {
        return window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches
          ? "dark"
          : "light";
      }

      return savedTheme;
    };

    const actualTheme = getResolvedTheme();

    setResolvedTheme(actualTheme);
    applyTheme(actualTheme);

    const mediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );

    const handleChange = () => {
      if (
        localStorage.getItem("theme-preference") === "system"
      ) {
        const newTheme = mediaQuery.matches
          ? "dark"
          : "light";

        setResolvedTheme(newTheme);
        applyTheme(newTheme);
      }
    };

    mediaQuery.addEventListener("change", handleChange);

    return () =>
      mediaQuery.removeEventListener(
        "change",
        handleChange
      );
  }, []);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);

    localStorage.setItem(
      "theme-preference",
      newTheme
    );

    let actualTheme: "light" | "dark";

    if (newTheme === "system") {
      actualTheme = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches
        ? "dark"
        : "light";
    } else {
      actualTheme = newTheme;
    }

    setResolvedTheme(actualTheme);
    applyTheme(actualTheme);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        resolvedTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error(
      "useTheme must be used within ThemeProvider"
    );
  }

  return context;
}