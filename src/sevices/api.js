
const urlMain = "https://restcountries.com/v3.1";

const regionMap = {
    'europa': 'Europe',
    'américa': 'Americas',
    'asia': 'Asia',
    'áfrica': 'Africa',
    'oceanía': 'Oceania'
};
const fetchData = async (filterByRegion) => {
    try {
        const response = await fetch(`${urlMain}${filterByRegion}`);
        if (!response.ok) {
            throw new Error(`Error ${response.status}`);
        }
        const data = await response.json();
        return data;

    } catch (error) {
        console.error("API not renponse: ", error.message);
        throw error;
    }
};

export const getAllCountries = () => {
    return fetchData("/all?fields=name,flags,capital,population,cca3,region");
}

export const getRegionCountries = (continente) => {
    if (!continente) return getAllCountries();
    const regions = regionMap[continente.toLocaleLowerCase()] || continente;
    return fetchData(`/region/${regions}`);
}

