import { useCountries } from '../context-data/useCountries.js'
import { IconSearch } from '../../public/images/IconsSvg.jsx';

export const SearchByName = () => {
    const { setSearchName } = useCountries();
    const handleChange = (e) => {
        setSearchName(e.target.value);
    }
    return (
        <div className="bg-blue-900 text-preset-6 text-white w-full max-w-120 py-3 flex items-center rounded-lg md:text-preset-5 light:bg-grey-50 light:text-grey-950">
            <span className="w-full max-w-12 flex items-center justify-center"><IconSearch aria-hidden="true" /></span>
            <label id="search-label" htmlFor="search-input" className='sr-only'>Search for a Country</label>
            <input
                type="text"
                id='search-input'
                aria-labelledby="search-label"
                onChange={handleChange}
                placeholder="Search for a country..."
                className="text-preset-6 text-white light:text-grey-950  md:text-preset-5"
            />
        </div>

    );
}
