//import react
import React from 'react';
//import render method
import { render } from 'react-dom';
//import the app component
import { App } from './components/App';

//crete root const
const root = document.getElementById('root');

//render the app
render(<App name='you'/>, root);
