import React from 'react';
import { shallow } from "enzyme";
import '@testing-library/jest-dom';
import TicTacToeSquare from "../src/TicTacToeSquare/TicTacToeSquare";

const ticTacToeSquare = shallow(<TicTacToeSquare />);


it('renders correctly', () => {  
    expect(ticTacToeSquare).toMatchSnapshot();
});