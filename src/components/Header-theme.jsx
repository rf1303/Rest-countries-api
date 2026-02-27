import { IconMoon, IconSun } from '../../public/images/IconsSvg.jsx';

export const HeaderPage = () => {
    const themeSelected = ""
    const handleTheme = () => {
        console.log('themeSelected:', themeSelected)
    }

    return (
        <header className="bg-blue-900 h-20 text-white flex items-center justify-between">
            <h1 className="text-preset-5 font-extrabold">Where in the world?</h1>
            <button onClick={handleTheme} className="text-preset-6 font-semibold flex place-items-center gap-3">
              <IconSun aria-hidden="true" />Light Theme  
            </button>
        </header>
    );
}
