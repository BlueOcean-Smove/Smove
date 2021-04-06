import React, {useEffect, useState} from 'react';
import MapContainer from './MapContainer';
import axios from 'axios';



const BusinessMap = () => {

  const [currentSearch, setCurrentSearch] = useState({});
  const [searchResult, setSearchResult] = useState([]);

  const handleChange = (event) => {
    setCurrentSearch({
      ...currentSearch,
      [event.target.name]: event.target.value
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
   // console.log(currentSearch);

    axios.post('/business', currentSearch)
    .then(data=>setSearchResult(data.data.businesses))
    .catch(()=>res.send())
    event.target.reset();
    console.log(searchResult);
  }

  return (
    <div>
      <h2>Search for Business </h2>
      <form className="search-service" onSubmit={handleSubmit}>
        <input type="text" name="term" placeholder="moving, mover..." onChange={handleChange}></input>
        <input type="text" name="location" onChange={handleChange}></input>
        <button>SEARCH</button>
      </form>
      <MapContainer searchResult={searchResult}/>

      </div>
  )
}

export default BusinessMap;
