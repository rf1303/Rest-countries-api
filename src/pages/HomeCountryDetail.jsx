import { useCallback } from 'react'
import { useParams } from 'react-router-dom'
import { getAllCountries, getCountriesDetail } from '../sevices/api.js'
import { useFetch } from '../hook/useFetch.jsx'

export const HomeCountryDetail = () => {
    const { name } = useParams();
    const fetchName = useCallback(() => {
        return getCountriesDetail(name);
    }, [name]);
    const { data: countryName, loading, error } = useFetch(fetchName);
    const country = countryName?.[0];
    if (loading) return <p className="text-cyan-700 text-2xl">Cargando...</p>
    if (error) return <p className="text-red-800 text-2xl">Error: {error}</p>
    console.log('country:', country)
    const handleClick = () => {
        console.log('name:', name)
        return
    }
    return (
        <>
            <div className="">
                <div className="">
                    <button onClick={handleClick} className="back__btn ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><g fill="none" fillRule="evenodd"><path d="M24 0v24H0V0h24ZM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036c-.01-.003-.019 0-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.016-.018Zm.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01-.184-.092Z" /><path fill="currentColor" d="M10 6.414 4.413 12 10 17.586V15c0-.545.455-1 1-1h9v-4h-9a1 1 0 0 1-1-1V6.414Zm-.902-1.926C10.168 3.417 12 4.175 12 5.69V8h8a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-8v2.31c0 1.515-1.831 2.273-2.902 1.202l-6.453-6.451a1.5 1.5 0 0 1 0-2.122l6.453-6.451Z" /></g></svg>
                        Back
                    </button>
                    <img src={country?.flags?.svg} alt={country?.flags?.alt} loading='lazy' className="" />
                </div>

            </div>
        </>
    );
}
