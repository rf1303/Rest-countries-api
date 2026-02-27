import { Routes, Route } from 'react-router-dom';
import { HomeCountryMain } from './pages/HomeMainPage.jsx'; 
import { HomeCountryDetail } from './pages/HomeDetailPage.jsx'; 
import { getAllCountries } from './useFetch/useFetch.js'
import './App.css'

function App() {
    getAllCountries().then(data => {
        console.log(data);
    });
    return (
        <>
        </>
    )
}

export default App
