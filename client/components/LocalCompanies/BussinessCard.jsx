import React, { useState } from 'react';
import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import StarRatings from 'react-star-ratings';


const CardStyle = styled.div`
  display: inline-block;
  width: 18rem;
  height: 550px;
  margin: 15px;
`;

const BussinessCard = ({ data }) => {
  //* * States * *//
  const [buttonColor, setButtonColor] = useState('secondary');

  //* * onClick handler * *//
  const handleSubmit = (event) => {
    event.preventDefault();
    if (buttonColor === 'secondary') {
      setButtonColor('success');
    } else {
      setButtonColor('secondary');
    }
  }
  return(
    <CardStyle key={data.id}>
      <Card border="dark" style={{height: 500 + 'px'}}>
        <Card.Img variant="top" style={{height: 210+'px'}} src={data.image_url} />
        <Card.Body>
          <Card.Title>{data.name}</Card.Title>
          <Badge variant={buttonColor} onClick={handleSubmit}>Favorite</Badge>
          <Card.Text>
            {data.location.display_address}
          </Card.Text>
          <Card.Text>{data.display_phone}</Card.Text>
          <a href={data.url} target="_blank">Website</a>
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