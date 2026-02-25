import { Routes, Route } from 'react-router-dom';
 
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
