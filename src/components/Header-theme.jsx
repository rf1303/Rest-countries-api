import { useThemeSelect } from '../hook/useTheme.jsx'
import { useCountries } from '../context-data/useCountries.js'
import { IconMoon, IconSun } from '../../public/images/IconsSvg.jsx';
import { Link } from 'react-router-dom'

export const HeaderPage = () => {
    const { setByRegion } = useCountries();
    const { themeSelect, toggleTheme } = useThemeSelect();
    const isDark = themeSelect === "dark";
    const handleClick = () => {
        setByRegion(null) 
    }
    return (
        <header className="bg-blue-900 h-20 px-clampHeader text-white flex items-center justify-between shadow-lg/10 light:bg-blue-250 light:text-grey-950">
            <Link to="/" onClick={handleClick} className="text-preset-5 font-extrabold px-4 py-2 shadow-sm rounded-lg">Where in the world?</Link>
            <button onClick={toggleTheme} className="bg-blue-850 text-preset-6 font-semibold flex place-items-center gap-3 px-4 py-2 rounded-lg shadow-sm/10 cursor-pointer light:bg-blue-150">
                {!isDark ? <IconMoon aria-hidden="true" /> : <IconSun aria-hidden="true" />}
                {!isDark ? "Dark Theme" : "Light Theme"}
            </button>
        </header>
    );
}
