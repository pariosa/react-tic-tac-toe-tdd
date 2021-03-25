import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import TicTacToeGrid from "../src/TicTacToeGrid/TicTacToeGrid";
import initialState from "../src/states/initialState";
const ticTacToeGrid = shallow(<TicTacToeGrid state={initialState}/>);

it('renders correctly', () => {  
    expect(ticTacToeGrid).toMatchSnapshot();
});