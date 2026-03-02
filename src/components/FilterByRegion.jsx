import { useState, useEffect, useRef } from "react"
import { useSettingCountries } from '../context-data/useSettingCountries.js'




export const RegionsOptions = () => {
    const { listRef, byRegion, setByREgion, focusIndex, setFocusIndex, optionRef, listboxId, optionsRegion } = useSettingCountries();

    return (
        <ul ref={listRef} id={listboxId} role="listbox"
            aria-labelledby="region-trigger"
            aria-activedescendant={
                focusIndex >= 0 ? `region-option-${focusIndex}` : undefined}
            className={`absolute inset-0 z-30 bg-blue-900 
                     rounded-t-sm rounded-b-md transition-all
                     duration-500 origin-top ${ 
                     open 
                         ? "opacity-100 scale-y-100 shadow-xl shadow-black/90
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
                    onKeyDown={(e) => handleKeyDown(e,i)}
                    className="">

                    </li>
                );
            })}    
        </ul>
    );
}
