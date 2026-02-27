import { HeaderPage } from '../components/Header-theme.jsx';
import { Outlet } from 'react-router-dom';

export const HomeCountryMain = () => {
    return (
        <>
            <HeaderPage />
            <main className="">
                <Outlet />
            </main>
        </>
    );
}
