import { useCallback, useMemo } from 'react'
import { getAllCountries, getRegionCountries } from '../sevices/api.js'
import { useFetch } from '../hook/useFetch.jsx'
import { Link } from 'react-router-dom'
import { useCountries } from '../context-data/useCountries.js'

export const CountriesList = () => {
    const { allCountries, searchName, byRegion } = useCountries();
    const fetchName = useCallback(() => {
        if (!byRegion) return getAllCountries();
        return getRegionCountries(byRegion);
    }, [byRegion]);
    const { data: countries, loading, error } = useFetch(fetchName);

    const filterCountries = useMemo(() => {
        const sourceData = searchName ? (allCountries || countries) : countries;
        if (searchName && sourceData) {
            return sourceData.filter((item) => 
                item.name.common.toLowerCase().includes(searchName.toLowerCase())
            );
        }
        return sourceData;
    }, [searchName, allCountries, countries])

    if (loading) return <p role='status' aria-live='polite' className="mt-22 bg-cyan-700 text-gray-200 text-4xl rounded-md px-8 py-4 font-bold tracking-widest">Loading...</p>
    if (error) return <p role='alert' aria-live='assertive' className="mt-22 bg-red-800 text-gray-200 text-4xl rounded-md px-8 py-4 font-bold tracking-widest">Error: {error}</p> 

    return (
        <>
            <div className="w-full grid sm:grid-cols-[repeat(auto-fill,16.5rem)] items-center justify-items-center gap-10 mx-auto sm:max-w-150 sm:gap-18 xl:max-w-318">
                {filterCountries?.map((item) => (
                    <Link key={item.cca3} to={`/name/${item.name.common}`}  
                        className='countries__cards shadow__cards'>
                        <img src={item.flags.svg} alt={item.flags.alt} loading='lazy' className="cards__images" />
                        <div className="grid gap-4 pt-5.5 pb-12 px-6">
                            <h2 className="country__names">{item.name.common}</h2>
                            <div className="grid gap-2 leading-none">
                                <p className="country__items">Population: 
                                    <span className="items__detail">{item.population}</span>
                                </p>
                                <p className="country__items">Region: 
                                    <span className="items__detail">{item.region}</span>
                                </p>
                                <p className="country__items">Capital: 
                                    <span className="items__detail">{item.capital}</span>
                                </p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    );
}
