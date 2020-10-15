//import react
import React from 'react';
//import app component
import { App } from '../components/App';
//import shallow
import { shallow } from 'enzyme';

describe('<App />', () => {
  const wrapper = shallow(<App />);

	it('should contain 1 h3 element', () => {
    expect(wrapper.find('h3').length).toBe(1)
  });

  it('should contain title class', () => {
    expect(wrapper.find('.title').exists()).toBe(true)
  });
  
  console.log(wrapper.debug())
});
