import { useState, useEffect, useRef } from "react"
import { useSettingCountries } from '../context-data/useSettingCountries.js'
import { getAllCountries } from '../useFetch/useFetch.js'
import { SearchByName } from './SearchByName.jsx'
import { IconSearch, IconFilter } from '../../public/images/IconsSvg.jsx'

// const optionsRegion = [
//     { value: "africa", label: "Africa"},
//     { value: "america", label: "America"},
//     { value: "asia", label: "Asia"},
//     { value: "europe", label: "Europe"},
//     { value: "oceania", label: "Oceania"},
// ]
const optionsRegion = ["Africa", "America", "Asia", "Europa", "Oceania"];

export const CountriesNav = () => {
    const { open, setOpen, byRegion, setByRegion, focusIndex, setFocusIndex, regionRef, buttonRef, listboxId } = useSettingCountries();
    // const [open, setOpen] = useState(false);
    // const [byRegion, setByRegion] = useState(null);
    // const [focusIndex, setFocusIndex] = useState(-1);
    //
    // const regionRef = useRef();
    // const buttonRef = useRef();
    // const listboxId = "region-listbox";

    const handleClick = () => {
        setOpen(o => !o);
        if (!open) setFocusIndex(0);
    }
    return (
        <>
            <div className="flex flex-col items-start justify-center gap-10 sm:gap-0 sm:flex-row sm:items-center sm:justify-between mx-4 md:mx-10">
                <SearchByName />
                {/* className="text-preset-6 text-white md:text-preset-5 max-w-50 bg-blue-900 rounded-lg py-4 px-5" */}
                <div ref={regionRef} className="relative">
                    <button ref={buttonRef} id="region-trigger"
                        typeof="button" aria-haspopup="listbox"
                        aria-controls={listboxId} aria-expanded={open}
                        aria-label={byRegion
                            ? `Region Selected ${byRegion}. Change region`
                            : "Filter by Region"}
                        onClick={handleClick}
                        className={`text-preset-6 text-white md:text-preset-5 max-w-50 bg-blue-900 rounded-lg py-1 px-5 cursor-pointer flex items-center gap-4`}>
                        <span className="w-full">{byRegion ?? "Filter by Region"}</span>
                        <IconFilter open={open} />
                    </button>
                </div>
            </div>
        </>
    );
}
