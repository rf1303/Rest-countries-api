import {IconSearch} from '../../public/images/IconsSvg.jsx';

const handleChange = (e) => {
        console.log('e.target.value:', e.target.value)
}

export const SearchByName = () => {
    return (
        <div className="bg-blue-900 text-preset-6 text-white w-full max-w-120 py-3 flex items-center rounded-lg md:text-preset-5">
            <span className="w-full max-w-12 flex items-center justify-center"><IconSearch aria-hidden="true" /></span>
            <input
                type="text"
                name=""
                value=""
                onChange={(e) => handleChange(e)}
                placeholder="Search fo a country..."
                className="text-preset-6 text-white md:text-preset-5"
            />
        </div>

    );
}
