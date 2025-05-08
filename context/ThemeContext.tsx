"use client";

import { ConfigProvider, theme } from "antd";
import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextProps {
    themeMode: Theme;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within ThemeProvider");
    }
    return context;
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [themeMode, setThemeMode] = useState<Theme>("light");

    const toggleTheme = () => {
        setThemeMode((prev) => (prev === "light" ? "dark" : "light"));
    };

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "light";
        setThemeMode(savedTheme as Theme);
    }, []);

    return (
        <ThemeContext.Provider value={{ themeMode, toggleTheme }}>
            <ConfigProvider
                theme={{
                    algorithm:
                        themeMode === "dark" ? theme.darkAlgorithm : theme.defaultAlgorithm,
                }}
            >
                {children}
            </ConfigProvider>
        </ThemeContext.Provider>
    );
};
