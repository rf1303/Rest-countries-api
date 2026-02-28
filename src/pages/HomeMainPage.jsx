import { HeaderPage } from '../components/Header-theme.jsx';
import { Outlet } from 'react-router-dom';

export const HomeCountryMain = () => {
    return (
        <div className='grid gap-4 md:gap-10'>
            <HeaderPage />
            <main className="">
                <Outlet />
            </main>
        </div>
    );
}
