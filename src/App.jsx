import { Routes, Route } from 'react-router-dom';
import { HomeCountryMain } from './pages/HomeMainPage.jsx'; 
import { HomeCountryDetail } from './pages/HomeCountryDetail.jsx'; 
import { getAllCountries } from './sevices/api.js'
import { CountriesNav } from './components/CountriesNav.jsx';

function App() {
    getAllCountries().then(data => {
        console.log(data);
    });
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
