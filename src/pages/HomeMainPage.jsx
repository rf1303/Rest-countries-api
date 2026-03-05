import { CountriesList } from '../components/CountriesList.jsx';
import { CountriesNav } from '../components/CountriesNav.jsx';
import { HeaderPage } from '../components/Header-theme.jsx';
import { Outlet } from 'react-router-dom';

export const HomeCountryMain = () => {
    return (
        <div className='grid gap-4 font-nunitoSans md:gap-10'>
            <HeaderPage />
            <main className="w-full grid place-items-center gap-8 sm:gap-12">
                <Outlet />
            </main>
        </div>
    );
}
