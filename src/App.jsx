import { Routes, Route } from 'react-router-dom';
import { HomeCountryMain } from './pages/HomeMainPage.jsx'; 
import { HomeCountryDetail } from './pages/HomeCountryDetail.jsx'; 
import { CountriesList } from './components/CountriesList.jsx';

function App() {
    return (
        <Routes>
            <Route path='/' element={<HomeCountryMain />}>
                <Route index element={<CountriesList />} />
                <Route path='name/:name' element={<HomeCountryDetail />} />
            </Route>
        </Routes>
    )
}

export default App
