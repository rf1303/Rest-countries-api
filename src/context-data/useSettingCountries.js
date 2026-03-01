import { useContext } from 'react';
import { SettingRestCountries } from './CountriesContext.jsx';

export const useSettingCountries = () => {
    const context = useContext(SettingRestCountries);
    if (!context) {
        throw new Error('useSettingCountries debe usarsa dentro de SetRestCountries');
    }
    return context;
}


