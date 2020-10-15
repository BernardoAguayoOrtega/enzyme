//import react
import React from 'react';
//import app component
import { App } from '../components/App';
//import shallow
import { shallow } from 'enzyme';
//import toJson
import toJson from 'enzyme-to-json'

describe('<App />', () => {
	const wrapper = shallow(<App />);

	it('should contain 1 h3 element', () => {
		expect(wrapper.find('h3').length).toBe(1);
	});

	it('should contain title class', () => {
		expect(wrapper.find('.title').exists()).toBe(true);
	});

	it('should the correct text', () => {
		expect(wrapper.find('.title').text()).toBe("I'm the app component");
	});

	it('should have only children', () => {
		expect(wrapper.find('.title').children().length).toBe(1);
	});

	it('should bee sub title component', () => {
		expect(wrapper.find('SubTitle[text="hey"]').exists()).toBe(true);
	});

	it('matches the snap shot', () => {
		const tree = shallow(<App />);

		expect(toJson(tree)).toMatchSnapshot();
	});

});
