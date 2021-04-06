import React from 'react';
import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const CardStyle = styled.div`
  display: inline-block;
  width: 18rem;
  height: 18rem;
  border: solid 3px black;
  margin: 15px;
`;

const CarouselStyle = styled.div`
  width: 60%;
  justify-self: center;
`;

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const BussinessCarousel = (props) => {
  return (
    <div>
    <div>hello world</div>
    <CarouselStyle>
      <Carousel responsive={responsive} >
        {props.searchResult.map((business) =>(
          <CardStyle>
          <Card key={business.id}>
            <Card.Img variant="top" src={business.image_url} />
            <Card.Body>
              <Card.Title>{business.name}</Card.Title>
              <Card.Text>
                {business.location.display_address}
              </Card.Text>
              <Card.Text>{business.display_phone}</Card.Text>
              <Card.Text>{business.rating}</Card.Text>
            </Card.Body>
          </Card>
        </CardStyle>
        ))}
      </Carousel>
    </CarouselStyle>
    </div>
  )
}

export default BussinessCarousel;
