import { createContext, useState, useRef } from 'react';

export const SettingRestCountries = createContext();

export const SetRestCountries = ({ children }) => {
    const [open, setOpen] = useState(false);
    const [byRegion, setByRegion] = useState(null);
    const [focusIndex, setFocusIndex] = useState(-1);

    const [borderCountries, setBorderCountries] = useState(null);
    const [ allCountries, setAllCountries ] = useState(null);
    const [searchName, setSearchName] = useState('');
    const regionRef = useRef();
    const buttonRef = useRef();
    const listRef = useRef(null);
    const optionRefs = useRef([]);
    const listboxId = "region-listbox";
    const optionsRegion = ["Africa", "America", "Asia", "Europa", "Oceania"];

    return (
    <SettingRestCountries.Provider value={{
        open, setOpen,
        byRegion, setByRegion,
        focusIndex, setFocusIndex,
        allCountries, setAllCountries,
        searchName, setSearchName,
        borderCountries, setBorderCountries,
        regionRef, buttonRef, listRef,
        optionRefs, optionsRegion, listboxId
    }}>{children}</SettingRestCountries.Provider>
    );
}


