import { useSettingCountries } from '../context-data/useSettingCountries.js'
import { SearchByName } from './SearchByName.jsx'
import { IconFilter } from '../../public/images/IconsSvg.jsx'
import { RegionsOptions } from "./FilterByRegion.jsx"
import { CountriesList } from "./CountriesList.jsx"

const optionsRegion = ["Africa", "Americas", "Asia", "Europa", "Oceania"];

export const CountriesNav = () => {
    const { open, setOpen, byRegion, setFocusIndex, regionRef, buttonRef, listboxId } = useSettingCountries();

    const handleClick = () => {
        setOpen(o => !o);
        if (!open) setFocusIndex(0);
    }

    const handleKeyDown = (e) => {
        switch (e.key) {
            case "Enter":
            case " ":
            case "ArrowDown":
                e.preventDefault();
                setOpen(true);
                setFocusIndex(0);
                break;
            case "ArrowUp":
                e.preventDefault();
                setOpen(true);
                setFocusIndex(optionsRegion.length - 1);
                break;
            case "Escape":
                setOpen(false);
                break;
        }
    };

    return (
        <>
            <div className="w-full max-w-318 flex flex-col items-start justify-center gap-10 sm:gap-0 sm:flex-row sm:items-center sm:justify-between px-4 md:px-10 ">
                <SearchByName />
                {/* className="text-preset-6 text-white md:text-preset-5 max-w-50 bg-blue-900 rounded-lg py-4 px-5" */}
                <div ref={regionRef} className="relative">
                    <button ref={buttonRef} id="region-trigger"
                        type="button" aria-haspopup="listbox"
                        aria-controls={listboxId} aria-expanded={open}
                        aria-label={byRegion
                            ? `Region Selected ${byRegion}. Change region`
                            : "Filter by Region"}
                        onClick={handleClick}
                        onKeyDown={handleKeyDown}
                        className={`text-preset-6 text-white md:text-preset-5 max-w-50 bg-blue-900 rounded-lg py-1 px-5 cursor-pointer flex items-center gap-4`}>
                        <span className="w-full">{byRegion ?? "Filter by Region"}</span>
                        <IconFilter open={open} />
                    </button>
                    <RegionsOptions />
                </div>
            </div>
            <CountriesList byRegion={byRegion} />
        </>
    );
}
