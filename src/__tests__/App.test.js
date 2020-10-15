//import react
import React from 'react';
//import app component
import { App } from '../components/App';
//import shallow
import { shallow } from 'enzyme';

describe('<App />', () => {
	it('should render App', () => {
		const wrapper = shallow(<App />);
	});
});
