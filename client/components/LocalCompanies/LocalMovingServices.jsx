import React, {useEffect, useState} from 'react';
import MapContainer from './MapContainer';
import BussinessCarousel from './BussinessCarousel';
import axios from 'axios';




const BusinessMap = () => {

  const [currentSearch, setCurrentSearch] = useState({location:'seattle',sort_by:'distance'});
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
      .catch((error)=>console.log(error))
  }

  return (
    <div>
      <h2>Search for Business </h2>
      <form className="search-service" onSubmit={handleSubmit}>
        <input type="text" name="term" placeholder="moving, mover..." onChange={handleChange}></input>
        <input type="text" name="location" placeholder="Zip code" onChange={handleChange}></input>
        <label>Sort by</label>
        <select name="sort_by" onChange={handleChange}>
          <option value="distance">Distance</option>
          <option value="best_match">Best Match</option>
          <option value="rating">Rating</option>
          <option value="review_count">R`eviews</option>

        </select>
        <button>SEARCH</button>
      </form>
      <MapContainer searchResult={searchResult}/>
      <BussinessCarousel searchResult={searchResult}/>
      </div>
  )
}

export default BusinessMap;
