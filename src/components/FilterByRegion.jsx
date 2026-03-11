import { useEffect } from "react"
import { useSettingCountries } from '../context-data/useSettingCountries.js'


export const RegionsOptions = () => {

    const { open, setOpen, listRef, byRegion, setByRegion, focusIndex, setFocusIndex, optionRefs, listboxId, optionsRegion, buttonRef, regionRef } = useSettingCountries();

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (regionRef.current && !regionRef.current.contains(e.target)) {
                setOpen(false);
                setFocusIndex(-1);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        if (open && focusIndex >= 0) {
            optionRefs.current[focusIndex]?.focus();
        }
    }, [focusIndex, open]); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        const handleGlobalKeyDown = (e) => {
            if (e.key === 'Escape' && open) {
                e.preventDefault();
                setOpen(false);
                setFocusIndex(-1);
                buttonRef.current?.focus();
            }
        };
        
        document.addEventListener('keydown', handleGlobalKeyDown);
        return () => document.removeEventListener('keydown', handleGlobalKeyDown);
    }, [open]); // eslint-disable-line react-hooks/exhaustive-deps

    const handleOptionsKeys = (e, index) => {
        switch (e.key) {
            case "ArrowDown":
                e.preventDefault();
                setFocusIndex((index + 1) % optionsRegion.length)
                break;
            case "ArrowUp":
                e.preventDefault();
                setFocusIndex((index - 1 + optionsRegion.length) % optionsRegion.length);
                break;
            case "Enter":
            case " ":
                e.preventDefault();
                handleSelect(optionsRegion[index]);
                break;
            case "Escape":
                e.preventDefault();
                setOpen(false);
                setFocusIndex(-1);
                buttonRef.current?.focus(); // regresa foco al trigger
                break;
            case "Tab":
                setOpen(false);
                setFocusIndex(-1);
                break;
            case "Home":
                e.preventDefault();
                setFocusIndex(0);
                break;
            case "End":
                e.preventDefault();
                setFocusIndex(optionsRegion.length - 1);
                break;
        }
    };

    const handleSelect = (region) => {
        setByRegion(region);
        setOpen(false);
        setFocusIndex(-1);
        buttonRef.current?.focus();
    }


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
                        tabIndex={open ? 0 : -1}
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
