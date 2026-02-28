import { useState } from "react"
import { getAllCountries } from '../useFetch/useFetch.js'
import { IconSearch } from '../../public/images/IconsSvg.jsx'

const optionsRegion = [
    { value: "africa", label: "Africa"},
    { value: "america", label: "America"},
    { value: "asia", label: "Asia"},
    { value: "europe", label: "Europe"},
    { value: "oceania", label: "Oceania"},
]

export const CountriesNav = () => {
    const [ byRegion, setByRegion ] = useState("");

    const handleChange = (e) => {
        console.log('e.target.value:', e.target.value)
    }
    return (
    <>
        <div className="flex items-center justify-between mx-4 md:mx-10">
            <div className="bg-blue-900 w-full max-w-120 py-3 flex items-center rounded-lg ">
                <span className="w-full max-w-12 flex items-center justify-center"><IconSearch aria-hidden="true" /></span>
                <input
                  type="text"
                  name=""
                  value=""
                  onChange={(e) => handleChange(e)}
                  placeholder="Search fo a country..."
                  className=""
                />
            </div>
            <select
              name=""
              value={byRegion}
              onChange={handleChange}
              className=""
            >
                <option value="">Filter by Region</option>
                { optionsRegion.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                ))}
            </select>
        </div>
    </>
    ); 
}
