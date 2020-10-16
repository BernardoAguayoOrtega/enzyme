//import react
import React from 'react';
//import render method
import { render } from 'react-dom';
//import the app component
import { App } from './components/App';
//import hash router
import { HashRouter as Router } from 'react-router-dom';
//import context provider
import { ContextProvider } from '../src/utils/Context';

//crete root const
const root = document.getElementById('root');

//render the app
render(
	<ContextProvider>
		<Router basename='/'>
			<App />
		</Router>
	</ContextProvider>,
	root,
);
