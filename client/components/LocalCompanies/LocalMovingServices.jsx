import React, {useEffect, useState} from 'react';
import MapContainer from './MapContainer';
import BussinessCarousel from './BussinessCarousel';
import axios from 'axios';
import styled from 'styled-components';

const Title = styled.h3`
  margin-top: 20px;
`;

const SearchInput = styled.input`
  margin: 10px;
  height: 26px;
`;

const SearchSelect = styled.select`
  margin-left: 10px;
`;

const LocalCompaniesContainer = styled.div`
  margin: auto;
  width: 80%;
  text-align: center;
`;

const SearchBars = styled.form`
  margin-top: 5px;
  margin-bottom: 5px;
`;

const SearchButton = styled.button`
  margin-left: 20px;
  margin-right: 10px;
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
      <Title>Search for Local Business </Title>
      <SearchBars className="search-service" onSubmit={handleSubmit}>
        <SearchInput type="text" name="term" placeholder="moving, mover..." onChange={handleChange}></SearchInput>
        <SearchInput type="text" name="location" placeholder="Zip code" onChange={handleChange}></SearchInput>
        <label>Sort by</label>
        <SearchSelect name="sort_by" onChange={handleChange}>
          <option value="distance">Distance</option>
          <option value="best_match">Best Match</option>
          <option value="rating">Rating</option>
          <option value="review_count">R`eviews</option>

        </SearchSelect>
        <SearchButton>SEARCH</SearchButton>
      </SearchBars>
      <MapContainer searchResult={searchResult}/>
      <BussinessCarousel searchResult={searchResult}/>
      </LocalCompaniesContainer>
  )
}

export default BusinessMap;
