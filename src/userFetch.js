import { useState, useEffect } from "react";

// Data fetching with a hook

//State 1: If the data isn't available but it's loading.

//State 2: If we get the data:

//State 3: If there is an error:

// getting data with custom hooks
export function useFetch(uri) {
    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState()

    useEffect(() => {
        if(!uri) return;
        fetch(uri) //State 1
        .then(data => data.json()) //State 2:
        .then(setData)
        .then(() => setLoading(false))
        .catch(setError) //State 3
    }, [uri])

    return {loading, data, error}
}