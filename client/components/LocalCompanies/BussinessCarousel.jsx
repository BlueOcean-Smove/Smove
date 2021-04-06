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
// {
//   "businesses": [
//       {
//           "id": "FVzl8rDPiTWEtrNEuCu-Xg",
//           "alias": "storyville-coffee-company-seattle-9",
//           "name": "Storyville Coffee Company",
//           "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/nJgiyjMZ7sglAtc5wyKSLQ/o.jpg",
//           "is_closed": false,
//           "url": "https://www.yelp.com/biz/storyville-coffee-company-seattle-9?adjust_creative=H9ULG_dBG0pz8wf45b0HOw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=H9ULG_dBG0pz8wf45b0HOw",
//           "review_count": 1787,
//           "categories": [
//               {
//                   "alias": "coffee",
//                   "title": "Coffee & Tea"
//               },
//               {
//                   "alias": "bakeries",
//                   "title": "Bakeries"
//               },
//               {
//                   "alias": "waffles",
//                   "title": "Waffles"
//               }
//           ],
//           "rating": 4.5,
//           "coordinates": {
//               "latitude": 47.60895949363687,
//               "longitude": -122.34043157053927
//           },
//           "transactions": [
//               "delivery",
//               "pickup"
//           ],
//           "price": "$$",
//           "location": {
//               "address1": "94 Pike St",
//               "address2": "Ste 34",
//               "address3": "",
//               "city": "Seattle",
//               "zip_code": "98101",
//               "country": "US",
//               "state": "WA",
//               "display_address": [
//                   "94 Pike St",
//                   "Ste 34",
//                   "Seattle, WA 98101"
//               ]
//           },
//           "phone": "+12067805777",
//           "display_phone": "(206) 780-5777",
//           "distance": 1867.0194496370636
//       },