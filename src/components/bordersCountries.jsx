import { Link } from 'react-router-dom';


export const BorderCountries = ({ borders }) => {
    if (!borders || borders.length === 0) {
        return null;
    }
    return (
        <div className="w-full flex flex-col gap-4 sm:flex-row md:col-span-2 ">
            <h4 className="w-full max-w-fit text-preset-4 font-semibold">Border Countries:</h4>
            <div className=' flex flex-wrap items-center justify-center gap-4 '>
                {borders?.map(item => (
                    <Link key={item.cca3} to={`/name/${item.name.common}`}
                        className='countries__link'>
                        {item.name.common}
                    </Link>
                ))}
            </div>
        </div>

    );

}


