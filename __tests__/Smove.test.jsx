import React from 'react';
import App from '../client/components/App.jsx';
import Login from '../client/components/Login.jsx';
import { render, screen, cleanup, fireEvent, queryByTestId, act, queryByPlaceholderText } from '@testing-library/react';