import { useThemeSelect } from '../hook/useTheme.jsx'
import { IconMoon, IconSun } from '../../public/images/IconsSvg.jsx';

export const HeaderPage = () => {
    const { themeSelect, toggleTheme } = useThemeSelect();
    const isDark = themeSelect === "dark";
    console.log('isDark:', isDark)
    return (
        <header className="bg-blue-900 h-20 px-clampHeader text-white flex items-center justify-between light:bg-grey-50 light:text-grey-950">
            <h1 className="text-preset-5 font-extrabold">Where in the world?</h1>
            <button onClick={toggleTheme} className="text-preset-6 font-semibold flex place-items-center gap-3">
                {!isDark ? <IconMoon aria-hidden="true" /> : <IconSun aria-hidden="true" />}
                {!isDark ? "Dark Theme" : "Light Theme"}
            </button>
        </header>
    );
}
