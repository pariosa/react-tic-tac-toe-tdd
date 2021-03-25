import React from 'react';
import { render } from '@testing-library/react';
import Layout from './index';
import '@testing-library/jest-dom';
import { shallow } from "enzyme";
import { initialState } from "./reducers/gameReducer";

const index = shallow(<Layout state={initialState} />);

it('renders', ()=>{
    expect(index).toMatchSnapshot();
})

test('renders index element', ()=>{
    const { getByText } = render(<Layout state={initialState}/>);
    const title = getByText(/Tic Tac Toe/i);
    expect(title).toBeInTheDocument();
});
/*
describe('the default options should be player symbol = x and player goes first' ()=>{
   // expect()


    //wrapper.setProps({ color: undefined});
    //expect(wrapper.state('color')).toEqual('transparent');

})

describe('when the options are clicked, expect the outer component state to be symbol = o and player goes second' =>(){

})
*/