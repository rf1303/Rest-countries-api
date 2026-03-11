import { HeaderPage } from '../components/Header-theme.jsx';
import { Outlet } from 'react-router-dom';

export const HomeCountryMain = () => {
    return (
        <div className='grid gap-4 font-nunitoSans md:gap-10'>
            <a 
                href="#main-content" 
                className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-white focus:text-black focus:px-4 focus:py-2 focus:rounded-md focus:font-semibold"
            >
                Skip to main content
            </a>
            <HeaderPage />
            <main id="main-content" className="w-full grid place-items-center gap-8 sm:gap-12">
                 <h1 className="sr-only">Countries</h1>
                <Outlet />
            </main>
        </div>
    );
}
