import React from 'react';
import styled from 'styled-components';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import BussinessCard from './BussinessCard';

//* * Styles * *//

const CarouselPos = styled.div`
  width: 100%;
`;

const CarouselStyle = styled.div`
  width: 1200px;
  height: 600px;
  margin-left: auto;
  margin-right: auto;
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

//* * Renders Carousel on Search * *//
const BussinessCarousel = (props) => {
  return (
    <CarouselPos>
      <CarouselStyle>
        <Carousel responsive={responsive} arrows={true} renderButtonGroupOutside={true} >
          {props.searchResult.map((business) =>(
            <BussinessCard data={business} key={business.id}/>
          ))}
        </Carousel>
      </CarouselStyle>
    </CarouselPos>

  )
}

export default BussinessCarousel;
