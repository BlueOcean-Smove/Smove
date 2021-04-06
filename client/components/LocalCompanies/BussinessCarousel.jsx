import React, { useState } from 'react';
import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Badge from 'react-bootstrap/Badge';
import BussinessCard from './BussinessCard';

//* * Styles * *//

const CardStyle = styled.div`
  display: inline-block;
  width: 18rem;
  height: 28rem;
  margin: 15px;
`;

const CarouselStyle = styled.div`
  width: 60%;
  justify-self: center;
`;

//* * Responsive Var needed for Carousel * *//

const responsive = {
  superLargeDesktop: {
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

//* * Functionality * *//

const BussinessCarousel = (props) => {
  return (
    <div>
    <CarouselStyle>
      <Carousel responsive={responsive} >
        {props.searchResult.map((business) =>(
          <BussinessCard data={business} />
        ))}
      </Carousel>
    </CarouselStyle>
    </div>
  )
}

export default BussinessCarousel;
