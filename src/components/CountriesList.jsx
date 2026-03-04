import { useSettingCountries } from '../context-data/useSettingCountries.js'
import { getAllCountries } from '../sevices/api.js'
import { useFetch } from '../hook/useFetch.jsx'


export const CountriesList = () => {
    const { byRegion } = useSettingCountries();
    const { data: countries, loading, error }= useFetch(getAllCountries);
    
    if(loading) return <p className="text-cyan-700 text-2xl">Cargando...</p>
    if(error) return <p className="text-red-800 text-2xl">Error: {error}</p>

    return (
        <div className="">
        {countries?.map((item) => (
          <article key={item.name}>
            
          </article>
        ))} 
        </div>
    );
}
