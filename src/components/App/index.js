//import react
import React from 'react';
//import switch, link and route components
import { Switch, Link, Route } from 'react-router-dom';
//import random page
import { RandomPage } from '../RandomPage';

const SubTitle = ({ text }) => <h4>{text}</h4>;

//export and create app component
export const App = () => {
	const handleSomething = () => true;

	return (
		<>
			<h3 className='title'>I'm the app component</h3>
			<h2>Hey there</h2>
			<h3>{name}</h3>
			<SubTitle text='hey <3' />

			<Switch>
				<Route path='/random' exact={true}>
					<RandomPage />
				</Route>
			</Switch>
		</>
	);
};
