import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { SetRestCountries } from './context-data/CountriesContext.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <SetRestCountries>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </SetRestCountries>
    </StrictMode>,
)
