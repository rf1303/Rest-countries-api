import { useEffect, useState } from 'react';

export const useThemeSelect = () => {
    const [ themeSelect, setThemeSelect] = useState(
        () => localStorage.getItem("themeSelect") || "dark"
    );
    useEffect(() => {
        const html = document.documentElement;
        if (themeSelect === 'dark') {
            html.classList.add('dark');
            html.classList.remove('light');
        } else {
            html.classList.add('light');
            html.classList.remove('dark');
        }
        localStorage.setItem("themeSelect", themeSelect);
    }, [themeSelect])

    const toggleTheme = () => {
        setThemeSelect(tm => tm === "light" ? "dark" : "light");
    }

    return { themeSelect, toggleTheme }; 
};
