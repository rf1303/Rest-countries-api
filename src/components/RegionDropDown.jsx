import { useRegionsOptions } from './useRegionDropDown.js';

export const RegionsOptions = () => {
    const { open, listRef, focusIndex,
            byRegion, optionsRegion, handleSelect,
            handleOptionsKeys, optionRefs, listboxId
    } = useRegionsOptions();

    return (
        <ul ref={listRef} id={listboxId} role="listbox"
            aria-labelledby="region-trigger"
            aria-activedescendant={
                focusIndex >= 0 ? `region-option-${focusIndex}` : undefined}
            className={`bg-blue-900 absolute inset-x-0 top-14  
                     max-w-50 w-full px-4 py-3 min-h-11 z-50 
                     rounded-t-sm rounded-b-md transition-all
                     duration-300 origin-top light:bg-blue-250 
                     light:text-grey-950 ${open
                    ? "opacity-100 scale-y-100 shadow-xl shadow-black/30"
                    : "opacity-0 scale-y-1 pointer-events-none "}`
            }>
            {optionsRegion.map((region, i) => {
                const isSelect = byRegion === region;
                return (
                    <li key={region} id={`region-option-${i}`}
                        ref={(el) => (optionRefs.current[i] = el)}
                        aria-selected={isSelect} role="option"
                        tabIndex={open && focusIndex === i ? 0 : -1}
                        onClick={() => handleSelect(region)}
                        onKeyDown={(e) => handleOptionsKeys(e, i)}
                        className={`flex items-center text-preset-5 text-white
                        transition-colors duration-300 focus-visible:ring-2 
                        focus-visible:ring-blue-800
                        light:text-grey-950
                        ${focusIndex === i ? "bg-blue-focus text-white light:text-white rounded-sm"
                                : "text-white light:text-grey-950 hover:bg-blue-focus focus-visible:bg-blue-focus"}
                        `}
                    >
                        {region}
                        {isSelect && (<span className="sr-only">(seleccionado)</span>)}
                    </li>
                );
            })}
        </ul>

    );
}
