import { createContext, useContext, useState, useRef } from 'react';

const SettingRestCountries = createContext();

export const SetRestCountries = ({ children }) => {
    const [open, setOpen] = useState(false);
    const [byRegion, setByRegion] = useState(null);
    const [focusIndex, setFocusIndex] = useState(-1);

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
        regionRef, buttonRef, listRef,
        optionRefs, optionsRegion, listboxId
    }}>{children}</SettingRestCountries.Provider>
    );
}

export const useSettingCountries = () => {
    const context = useContext(SettingRestCountries);
    if (!context) {
        throw new Error('useSettingCountries debe usarsa dentro de SetRestCountries');
    }
    return context;
}


