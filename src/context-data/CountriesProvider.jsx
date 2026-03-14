import { useState, useRef } from 'react';
import { CountriesContext } from './CountriesContext.jsx';

export const CountriesProvider = ({ children }) => {
    const [open, setOpen] = useState(false);
    const [byRegion, setByRegion] = useState(null);
    const [focusIndex, setFocusIndex] = useState(-1);
    const [borderCountries, setBorderCountries] = useState(null);
    const [allCountries, setAllCountries] = useState(null);
    const [searchName, setSearchName] = useState('');
    
    const regionRef = useRef();
    const buttonRef = useRef();
    const listRef = useRef(null);
    const optionRefs = useRef([]);
    const listboxId = "region-listbox";
    const optionsRegion = ["Africa", "Americas", "Asia", "Europa", "Oceania"];

    const value = {
        open, setOpen,
        byRegion, setByRegion,
        focusIndex, setFocusIndex,
        allCountries, setAllCountries,
        searchName, setSearchName,
        borderCountries, setBorderCountries,
        regionRef, buttonRef, listRef,
        optionRefs, optionsRegion, listboxId
    };

    return (
        <CountriesContext.Provider value={value}>
            {children}
        </CountriesContext.Provider>
    );
};
