import { useState, useEffect, useRef } from 'react';
import { useSettingCountries } from '../context-data/useSettingCountries.js';

export const useRegionsOptions = () => {
    const {
        open, setOpen,
        byRegion, setByRegion,
        focusIndex, setFocusIndex,
        optionRefs, listboxId,
        optionsRegion, buttonRef,
        regionRef
    } = useSettingCountries();

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

    return
}
