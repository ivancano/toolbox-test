import React from 'react';
import renderer, {act} from 'react-test-renderer';
import App from './App';
import store from './MobX/store';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('App', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<App store={store}/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
 
  it('renders the inner Counter', () => {
    const wrapper = mount(<App store={store}/>);
    wrapper.find('input').simulate('change', {target: {value: 'My new value'}});
    wrapper.find('Button').simulate('click');
  });
});