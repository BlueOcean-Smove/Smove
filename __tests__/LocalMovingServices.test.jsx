import React from 'react';
import { render, screen, cleanup, fireEvent, queryByTestId, act, queryByPlaceholderText } from '@testin-library/react';
import express from 'express';
const app = express();
let fired = false;

beforeEach(() => {
  fired = false;
  app.post('api/newEvent', (req, res) => {
    fired = true;
  })
})

describe('Map Carousel single card Rendering', () => {
  it('should render a card to the carousel', () => {
    const {  }
  });
});
