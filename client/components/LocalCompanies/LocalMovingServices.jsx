import React, {useEffect, useState} from 'react';
import MapContainer from './MapContainer';
import BussinessCarousel from './BussinessCarousel';
import axios from 'axios';
import styled from 'styled-components';

const LocalCompaniesContainer = styled.div`
  margin: auto;
  width: 80%;
`;

const SearchBars = styled.form`
  margin-top: 5px;
  margin-bottom: 5px;
`;

const SearchButton = styled.button`
  margin-left: 20px;
  border-style: solid;
  border-color: darkgray;
  border-radius: 5px;
  background-color: white;
  color: black;
  &:hover{
    background-color: darkgray;
    color: white;
  }`;

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
    <LocalCompaniesContainer>
      <h3>Search for Local Business </h3>
      <SearchBars className="search-service" onSubmit={handleSubmit}>
        <input type="text" name="term" placeholder="moving, mover..." onChange={handleChange}></input>
        <input type="text" name="location" placeholder="Zip code" onChange={handleChange}></input>
        <label>Sort by</label>
        <select name="sort_by" onChange={handleChange}>
          <option value="distance">Distance</option>
          <option value="best_match">Best Match</option>
          <option value="rating">Rating</option>
          <option value="review_count">R`eviews</option>

        </select>
        <SearchButton>SEARCH</SearchButton>
      </SearchBars>
      <MapContainer searchResult={searchResult}/>
      <BussinessCarousel searchResult={searchResult}/>
      </LocalCompaniesContainer>
  )
}

export default BusinessMap;
