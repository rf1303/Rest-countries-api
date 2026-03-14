import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { CountriesProvider } from './context-data/CountriesProvider.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <CountriesProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </CountriesProvider>
    </StrictMode>,
)
