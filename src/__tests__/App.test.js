//import react
import React from 'react';
//import app component
import { App } from '../components/App';
//import shallow
import { shallow, mount } from 'enzyme';
//import toJson
import toJson from 'enzyme-to-json';
////import context provider
import { ContextProvider } from '../utils/Context';

describe('<App />', () => {
	const wrapper = mount(
		<ContextProvider>
			<App />
		</ContextProvider>,
	);

	it('should contain 1 h3 element', () => {
		expect(wrapper.find('h3').exists()).toBe(true);
	});

	it('should contain title class', () => {
		expect(wrapper.find('.title').exists()).toBe(true);
	});

	it('should the correct text', () => {
		expect(wrapper.find('.title').text()).toBe("I'm the app component 5");
	});

	it('should have only children', () => {
		expect(wrapper.find('.title').children().length).toBe(2);
	});

	it('should bee sub title component', () => {
		expect(wrapper.find('SubTitle').exists()).toBe(true);
	});

	it('is there a switch?', () => {
		const isThereSwitch = wrapper.find('Switch').exists();

		expect(isThereSwitch).toBe(true);
	});

	it('How many routes are?', () => {
		const numOfRoutes = wrapper.find('Router').length;

		expect(numOfRoutes).toBe(1);
	});

	it('matches the snap shot', () => {
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
