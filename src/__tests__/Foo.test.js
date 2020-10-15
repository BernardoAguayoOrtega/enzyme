//import react
import React from 'react';
//import app component
import { Foo } from '../components/Foo';
//import shallow
import { shallow, mount } from 'enzyme';
//import toJson
import toJson from 'enzyme-to-json';

describe('<Foo/> ', () => {
	it('should pass', () => {
		const wrapper = shallow(<Foo name='foo' />);
		expect(wrapper.find('.foo')).toHaveLength(1);
		expect(wrapper.find('.bar')).toHaveLength(0);
		wrapper.setProps({ name: 'bar' });
		expect(wrapper.find('.foo')).toHaveLength(0);
		expect(wrapper.find('.bar')).toHaveLength(1);
	});
});
