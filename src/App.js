import React from 'react';
import { useFetch } from './userFetch';


// get data with custom hook
function App({login}) {

    const {loading, data, error} = useFetch(`https://api.github.com/users/${login}`);
   if(loading) return <h1>Loading....</h1>
   if(error) return <pre>{JSON.stringify(error, null, 2)}</pre>
    return(
        <div>
            <img src={data.avatar_url} alt={data.login} height={200} />
            <div>{data.login}</div>
            <div>{data.name && <p>{data.name}</p>}</div>
            <div>{data.location && <p>{data.location}</p>}</div>
        </div>
        
    )
}

export default App;