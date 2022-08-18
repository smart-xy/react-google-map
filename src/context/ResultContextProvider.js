import React, {createContext, useContext, useState} from 'react'

const ResultContext = createContext();

const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1';

export const ResultContextProvider = ({children}) => {
    const [results, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const getResults = async (searchType) => {
        setLoading(true);

        const response = await fetch (`${baseUrl}${searchType}`,{
            method: 'GET',
            // url: 'https://google-search3.p.rapidapi.com/api/v1/search/q=elon+musk',
            headers: {
                'X-User-Agent': 'desktop',
                'X-Proxy-Location': 'EU',
                'X-RapidAPI-Key': 'process.env.REACT_APP_RAPID_API_KEY',
                'X-RapidAPI-Host': 'google-search3.p.rapidapi.com'
            }
        });

        const results = await response.json();
            console.log(results);
            if(searchType.includes('/news')){
                setData(results.entries);
            }
            else if(searchType.includes('/image')){
                setData(results.image_results)
            }
            else setData(results.results)
        setLoading(false);
    }

  return (
    <ResultContext.Provider value={{getResults, results, searchTerm, setSearchTerm, loading}}>
        {children}
    </ResultContext.Provider>
  )
}

export const useResultContext = () => useContext(ResultContext);

