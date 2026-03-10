import { useEffect, useState } from 'react';

export const useThemeSelect = () => {
    const [ themeSelect, setThemeSelect] = useState(
        () => localStorage.getItem("themeSelect") || "dark"
    );
    useEffect(() => {
        document.documentElement.classList.toggle("dark", themeSelect === "dark");
        localStorage.setItem("themeSelect", themeSelect);
    }, [themeSelect])

    const toggleTheme = () => {
        setThemeSelect(tm => tm === "light" ? "dark" : "light");
    }

    return { themeSelect, toggleTheme }; 
};
