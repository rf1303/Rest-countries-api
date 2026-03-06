import { useCallback } from 'react'
import { getAllCountries, getCountriesDetail } from '../sevices/api.js'
import { useFetch } from '../hook/useFetch.jsx'

export const HomeCountryDetail = ({name}) => {
    const fetchName = useCallback(() => {
        if (!name) return getAllCountries();
        return getCountriesDetail(name);
    }, [name]);
    const { data: countries, loading, error } = useFetch(fetchName);

    console.log('countries:', countries)

    if (loading) return <p className="text-cyan-700 text-2xl">Cargando...</p>
    if (error) return <p className="text-red-800 text-2xl">Error: {error}</p>
    return (
        <>
        </>
    );
}
