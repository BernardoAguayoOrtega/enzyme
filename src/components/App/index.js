//import react
import React from 'react';

const SubTitle = ({ text }) => <h4>{text}</h4>;

//export and create app component
export class App extends React.Component {
	render() {
		return (
			<>
				<h3 className='title'>I'm the app component</h3>
				<h2>Hey there</h2>
				<h3>{name}</h3>
				<SubTitle text='hey' />
			</>
		);
	}
}
