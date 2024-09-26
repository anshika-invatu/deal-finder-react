import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react'
import { faSearch } from '@fortawesome/free-solid-svg-icons';  
import logo from "../assets/deal-findr.png" 

const SearchBox = ({ onSearch }) => {

    const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };
  return (
    <form onSubmit={handleSearch} style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>

    <div>
    <img
        src={logo}
        alt="logo"
        width={100}
        height={100}
        className="mr-3"
      />    </div>
  <div className="relative">
    <input
      type="text"
      placeholder="Search..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className="p-3 pl-10 rounded-full border-2 border-gray-300 outline-none w-full"
      style={{width:"500px"}}
    />
    <FontAwesomeIcon
      icon={faSearch}
      className="absolute right-5 top-5 text-gray-400"
    />
  </div>
  {/* <button
    type="submit"
    style={{
      padding: '10px 20px',
      marginLeft: '10px',
      borderRadius: '15px',
      border: 'none',
      backgroundColor: '#4CAF50',
      color: 'white',
      cursor: 'pointer',
    }}
  >
    Search
  </button> */}
</form>
  )
}

export default SearchBox