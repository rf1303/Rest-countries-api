import { useState, useEffect, useRef, useCallback } from "react"
import { useSettingCountries } from '../context-data/useSettingCountries.js'



export const RegionsOptions = () => {
    const { open, setOpen, listRef, byRegion, setByRegion, focusIndex, setFocusIndex, optionRef, listboxId, optionsRegion, buttonRef } = useSettingCountries();

    const handleSelect = (region) => {
        setByRegion(region);
        setOpen(false);
        setFocusIndex(-1);
        buttonRef.current?.focus();
    }
    const handleOptionsKeys = useCallback((e, index) => {
        const { setFocusIndex, optionsRegion, setOpen, buttonref } = useSettingCountries();
        switch (e.key) {
            case "ArrowDown":
                e.preventDefault();
                setFocusIndex((index + 1) % optionsRegion.length)
                break;

            default:
                break;
        }
    }, []);
    return (
        <ul ref={listRef} id={listboxId} role="listbox"
            aria-labelledby="region-trigger"
            aria-activedescendant={
                focusIndex >= 0 ? `region-option-${focusIndex}` : undefined}
            className={`absolute inset-0 z-30 bg-blue-900 
                     max-w-50 
                     rounded-t-sm rounded-b-md transition-all
                     duration-500 origin-top ${open
                    ? "opacity-100 scale-y-100 shadow-xl shadow-black/90"
                    : "opacity-0 scale-y-1 pointer-events-none "}`
            }>
            {optionsRegion.map((region, i) => {
                const isSelect = byRegion === region;
                return (
                    <li key={region} id={`region-option-${i}`}
                        ref={(el) => (optionRef.current[i] = el)}
                        aria-selected={isSelect} role="option"
                        tabIndex={open ? 0 : -1}
                        onClick={() => handleSelect(region)}
                        onKeyDown={(e) => handleOptionsKeys(e, i)}
                        className={`flex items-center text-preset-5
                        transition-colors duration-700 focus:outline-none
                        ${isSelect ? "bg-grey-300 text-blue-900"
                                : "text-white hover:bg-blue-900/60 focus-visible:bg-blue-900/70"}`}
                    >
                        {region}
                        {isSelect && (<span className="sr-only">(seleccionado)</span>)}
                    </li>
                );
            })}
        </ul>
    );
}
