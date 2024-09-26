import './App.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import logo from "./assets/deal-findr.png"
import { useEffect, useState } from 'react';
import SearchBox from './components/SearchBox';


function App() {
  const [results, setResults] = useState([]);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await fetch('/data.json');
        // const jsonData = await response.json();
        const arr =["search result 1","search result 2"]
        setData(arr);  // Set the fetched data into the state
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = async (query) => {
    if (query && data) {
      // Simulate a search filtering through your data.json
      // const filteredResults = data.response.search.results.adsnorth.data
      //   .filter((item) => item.title.toLowerCase().includes(query.toLowerCase()))
      //   .map((item) => item.title);
      const value =data.map(item=>{
        return `${item} for ${query}`
      })
      setResults(value);
    }
  };
  return (
    <>
    {/* <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    Your  <FontAwesomeIcon icon={faCoffee} /> is hot and ready!
    this icon <FontAwesomeIcon icon={faMagnifyingGlass} /> for search
    <img
        src={logo}
        alt="logo"
        width={100}
        height={100}
        className="mr-3"
      /> */}

<div style={{ padding: '20px' }}>
      {/* <h1 className="flex item-center justify-center">Find your deal here</h1> */}
      <SearchBox onSearch={handleSearch} />
      <div style={{ marginTop: '20px' }}>
        {results.length > 0 ? (
          <ul>
            {results.map((result, index) => (
              <li key={index}>{result}</li>
            ))}
          </ul>
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
    </>
  )
}

export default App
