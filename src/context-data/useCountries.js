import { useContext } from 'react';
import { CountriesContext } from './CountriesContext.jsx';

export const useCountries = () => {
    const context = useContext(CountriesContext);
    if (!context) {
        throw new Error('useCountries debe usarse dentro de CountriesProvider');
    }
    return context;
};
