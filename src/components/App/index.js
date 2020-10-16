//import react
import React, { useContext, useState } from 'react';
//import switch, link and route components
import { Switch, Route, HashRouter as Router } from 'react-router-dom';
//import random page
import { RandomPage } from '../RandomPage';
//import context
import { Context } from '../../utils/Context';

const SubTitle = ({ text }) => <h4>{text}</h4>;

//export and create app component
export const App = () => {
	const { number2 } = useContext(Context);
	const [number] = useState(5)

	return (
		<Router basename='/'>
			<h3 className='title'>I'm the app component {number}</h3>
			<h2>Hey there</h2>
			<h3>{name}</h3>
			<SubTitle text={number2} />

			<Switch>
				<Route path='/random' exact={true}>
					<RandomPage />
				</Route>
			</Switch>
		</Router>
	);
};
