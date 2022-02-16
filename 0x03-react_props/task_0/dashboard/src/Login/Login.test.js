import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import App from '../App/App';
import Login from './Login'

describe('Test Login.js', () => {
  it('Login without crashing', (done) => {
    expect(shallow(<Login />).exists());
    done();
  });

  it('div with the class App-body', (done) => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<body className='App-body' />))
    done();
  });
});
