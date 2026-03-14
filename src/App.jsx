import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomeCountryMain } from './pages/HomeMainPage.jsx'; 
import { CountriesNav } from './components/CountriesNav.jsx';

const HomeCountryDetail = lazy(() => import('./pages/HomeCountryDetail.jsx'));

const Loading = () => (
    <div className="flex items-center justify-center min-h-screen">
        <p className="text-xl">Loading...</p>
    </div>
);

function App() {
    return (
        <Suspense fallback={<Loading />}>
            <Routes>
                <Route path='/' element={<HomeCountryMain />}>
                    <Route index element={<CountriesNav />} />
                    <Route path='name/:name' element={<HomeCountryDetail />} />
                </Route>
            </Routes>
        </Suspense>
    )
}

export default App
