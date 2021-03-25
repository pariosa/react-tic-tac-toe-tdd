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