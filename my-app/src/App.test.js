import * as React from 'react';
import App from './App';
import thunk from 'redux-thunk'
import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { load_form, save_form } from './store/action/formAction'


const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initialState={
    firstName:'',
    lastName:'',
    company:'',
    department:'',
    position:'',
    email:''
}
const store = mockStore({form: initialState});
let wrapper = mount(<Provider store={store}><App /></Provider>)



describe('<App />', () => {
  it('Render 6 input fields', () => {
    const input=wrapper.find('input');
    expect(input.length).toEqual(6)
  });

  it('Input field start empty', () => {
    const input=wrapper.find('input').first();
    expect(input.props().value).toEqual('')
  })

  it('Async save action should pass data to reducer', () => {
    let data={
      firstName:'test1',
      lastName:'test2',
    }
    return store.dispatch(save_form(data))
    .then(() => {
      const actions = store.getActions()
      expect(actions[0].payload.firstName).toEqual('test1');
      expect(actions[0].payload.lastName).toEqual('test2');
      expect(actions[0].payload.createdAt).not.toEqual(null)
    })
    
  })

  it('Async load action should pass data to reducer', () => {
      return store.dispatch(load_form())
      .then(() => {
        const actions = store.getActions()
        expect(actions[0].payload.firstName).toEqual('test1');
        expect(actions[0].payload.lastName).toEqual('test2');
      }) 
  })


});