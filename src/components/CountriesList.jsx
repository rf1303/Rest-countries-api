import { useCallback } from 'react'
import { getAllCountries, getRegionCountries } from '../sevices/api.js'
import { useFetch } from '../hook/useFetch.jsx'
import { HomeCountryDetail } from '../pages/HomeCountryDetail.jsx';
import { Link } from 'react-router-dom'

export const CountriesList = ({ byRegion }) => {
    const fetchName = useCallback(() => {
        if (!byRegion) return getAllCountries();
        return getRegionCountries(byRegion);
    }, [byRegion]);
    const { data: countries, loading, error } = useFetch(fetchName);

    console.log('countries:', countries)
    if (loading) return <p className="text-cyan-700 text-2xl">Cargando...</p>
    if (error) return <p className="text-red-800 text-2xl">Error: {error}</p>
    return (
        <>
            <div className="w-full grid sm:grid-cols-[repeat(auto-fill,264px)] items-center justify-items-center gap-10 mx-auto sm:max-w-150 sm:gap-18 xl:max-w-318">
                {countries?.map((item) => (
                    <a key={item.cca3} href={`/name/${item.name.common}`}  
                        className='w-full max-w-66 h-84   bg-blue-900 rounded-md text-white'>
                        <img src={item.flags.svg} alt={item.flags.alt} className="w-full h-40 object-cover rounded-t-md" />
                        <div className="grid gap-4 pt-5.5 pb-12 px-6">
                            <h2 className="country__names">{item.name.common}</h2>
                            <div className="grid gap-2 leading-none">
                                <p className="country__items">Population: <span className="items__detail">{item.population}</span></p>
                                <p className="country__items">Region: <span className="items__detail">{item.region}</span></p>
                                <p className="country__items">Capital: <span className="items__detail">{item.capital}</span></p>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </>
    );
}
