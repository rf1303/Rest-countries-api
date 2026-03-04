import { useState, useEffect } from 'react';

export const useFetch = (fetchApi) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const result = await fetchApi();
                setData(result);
            } catch (err) {
                console.error(error);
                setError(err.message)
            } finally {
                setLoading(false);
            }
        }
        getData();
    }, [])
    return { data, loading, error };
}
