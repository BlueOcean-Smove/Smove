import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import StarRatings from 'react-star-ratings';
import axios from 'axios';
import { UserDataContext } from '../Data.jsx';

//* * Styling Guides * *//
const CardStyle = styled.div`
  display: inline-block;
  width: 18rem;
  height: 550px;
  margin: 15px;
`;

const BussinessCard = ({ data }) => {
  //* * States * *//
  const { userData, setUserData } = useContext(UserDataContext);
  console.log(userData);

  //* * onClick handler * *//
  const handleSubmit = (event) => {
    event.preventDefault();

    //* * var to shorten typing in next part * *//
    const searchTerm = userData.smoves.filter(smove => smove.isCurrentSmove)[0].favCompanies;

    //* * Determines if company clicked on is in favCompanies, if is deletes it, if not adds it * *//
    if (searchTerm.filter(company => company.companyName === data.name).length === 0) {
      searchTerm.push({ companyName: data.name, url: data.url });
    } else {
      userData.smoves.filter(smove => smove.isCurrentSmove)[0].favCompanies = searchTerm.filter(company => company.companyName !== data.name);
    }

    //* * axios to update smoves with fav companies * *//
    axios.patch(`/user/${userData.email}`, {data: userData.smoves})
      .then(({ data }) => {
        console.log('FavCompany successfully updated: ', data);
        return data;
      })
      .then((data) => setUserData(data))
      .catch((err) => console.log(err));
  }

  //* * renders carousel cards * *//
  return(
    <CardStyle >
      <Card border="dark" style={{height: 500 + 'px'}}>
        <Card.Img data-testid="businessImage" variant="top" style={{height: 210+'px'}} src={data.image_url} />
        <Card.Body>
          <Card.Title data-testid="businessName">{data.name}</Card.Title>
          {userData.smoves.filter(smove => smove.isCurrentSmove)[0].favCompanies.filter(company => company.companyName === data.name).length === 0
          ? <Badge data-testid="favorite" variant="secondary" style={{marginBottom: 10+"px"}} onClick={handleSubmit}>Favorite</Badge>
          : <Badge data-testid="favorite" variant="success" style={{marginBottom: 10+"px"}} onClick={handleSubmit}>Favorite</Badge>
          }
          <Card.Text data-testid="businessAddress">
            {data.location.display_address}
          </Card.Text>
          <Card.Text data-testid="businessPhone">{data.display_phone}</Card.Text>
          <a href={data.url} target="_blank" data-testid="businessUrl" >Website</a><br />
          <StarRatings
          rating={data.rating}
          starRatedColor="yellow"
          numberOfStars={5}
          name='rating'
          starDimension= "30px"
          starSpacing = "5px"
        />
        </Card.Body>
      </Card>
    </CardStyle>
  )
}

export default BussinessCard;
