import React, { Component } from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import TicTacToeGrid from "../src/TicTacToeGrid/TicTacToeGrid";

const ticTacToeGrid = shallow(<TicTacToeGrid />);
it('renders correctly', () => {  
    expect(ticTacToeGrid).toMatchSnapshot();
});