import { useCallback, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getBorderCountries, getCountriesDetail } from '../sevices/api.js'
import { useSettingCountries } from '../context-data/useSettingCountries.js'
import { useFetch } from '../hook/useFetch.jsx'
import { BorderCountries } from '../components/bordersCountries.jsx'

export const HomeCountryDetail = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(-1);
    }
    const { borderCountries, setBorderCountries } = useSettingCountries();
    const { name } = useParams();
    const fetchName = useCallback(() => {

        return getCountriesDetail(name);
    }, [name]);
    const { data: countryName, loading, error } = useFetch(fetchName);
    const country = countryName?.[0];

    useEffect(() => {
        if (!country?.borders) return
        const fetchBorders = async () => {
            const result = await getBorderCountries(country.borders);
            setBorderCountries(result);
        };
        fetchBorders();
    }, [country?.borders])

    if (loading) return <p role='status' aria-live='polite' className="mt-22 bg-cyan-700 text-gray-200 text-4xl rounded-md px-8 py-4 font-bold tracking-widest">Loading ...</p>
    if (error) return <p role='alert' aria-live='assertive' className="mt-22 bg-red-800 text-gray-200 text-4xl rounded-md px-8 py-4 font-bold tracking-widest">Error: {error}</p>

    return (
        <>
            <div className="w-full max-w-clampDetail grid place-items-center gap-12 mt-6 mx-6 xl:max-w-7xl ">
                <button onClick={handleClick}  aria-label="Go back to previous page"
                    className="back__btn  justify-self-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><g fill="none" fillRule="evenodd"><path d="M24 0v24H0V0h24ZM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036c-.01-.003-.019 0-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.016-.018Zm.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01-.184-.092Z" /><path fill="currentColor" d="M10 6.414 4.413 12 10 17.586V15c0-.545.455-1 1-1h9v-4h-9a1 1 0 0 1-1-1V6.414Zm-.902-1.926C10.168 3.417 12 4.175 12 5.69V8h8a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-8v2.31c0 1.515-1.831 2.273-2.902 1.202l-6.453-6.451a1.5 1.5 0 0 1 0-2.122l6.453-6.451Z" /></g></svg>
                    Back
                </button>

                <div className="w-full grid gap-14 xl:grid-cols-2 xl:justify-between xl:">
                    <img src={country?.flags?.svg} alt={country?.flags?.alt || `Flag of ${country?.name.common}`}
                        loading='lazy' className="h-full min-h-57 rounded-md xl:max-w-140 xl:h-100" />
                    <div className="text-white max-w-150 xl:self-center light:text-black ">
                        <h1 className="text-preset-2 font-extrabold sm:text-preset-1">{country?.name.common}</h1>
                        <div className="grid gap-8 md:grid-cols-2 md:justify-between xl:gap-14">
                            <div className="text-preset-4 leading-8">
                                <p className="country__items">Native Name:
                                    <span className="items__detail"> {Object.values(country?.name.nativeName || {})[0]?.common}</span>
                                </p>
                                <p className="country__items">Population:
                                    <span className="items__detail"> {country?.population}</span>
                                </p>
                                <p className="country__items">Region:
                                    <span className="items__detail"> {country?.region}</span>
                                </p>
                                <p className="country__items">Sub Region:
                                    <span className="items__detail"> {country?.subregion}</span>
                                </p>
                                <p className="country__items">Capital:
                                    <span className="items__detail"> {country?.capital}</span>
                                </p>
                            </div>
                            <div className="leading-8">
                                <p className="country__items">Top Level Domian:
                                    <span className="items__detail"> {country?.tld}</span>
                                </p>
                                <p className="country__items">Currencies:
                                    <span className="items__detail"> {Object.values(country?.currencies || {})[0]?.name}</span>
                                </p>
                                <p className="country__items">Languages:
                                    <span className="items__detail"> {Object.values(country?.languages || {}).join(", ")}</span>
                                </p>
                            </div>
                            <BorderCountries borders={borderCountries} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
