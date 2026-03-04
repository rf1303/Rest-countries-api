import { Routes, Route } from 'react-router-dom';
import { HomeCountryMain } from './pages/HomeMainPage.jsx'; 
import { HomeCountryDetail } from './pages/HomeCountryDetail.jsx'; 
import { CountriesNav } from './components/CountriesNav.jsx';

function App() {
    return (
        <Routes>
            <Route path='/' element={<HomeCountryMain />}>
                <Route index element={<CountriesNav />} />
                <Route path='name/:name' element={<HomeCountryDetail />} />
            </Route>
        </Routes>
    )
}

export default App
