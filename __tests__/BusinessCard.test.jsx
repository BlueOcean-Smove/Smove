import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup, fireEvent, screen } from '@testing-library/react';
import BussinessCard from '../client/components/LocalCompanies/BussinessCard';
import { UserDataContext } from '../client/components/Data.jsx';

const sampleBusinessList={
  id: 1,
  image_url:"www.google.com",
  url: 'link',
  name:"sample1",
  rating: 5,
  display_phone:'12345',
  location:{
    display_address: "address_1",
  }

}

describe('Business Card', () => {
  test('renders image on carousel:', () => {
    render(<BussinessCard
      data={sampleBusinessList}
    />);
    screen.getByTestId('businessImage');
  });
});
