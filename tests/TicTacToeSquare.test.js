import React from 'react';
import { shallow, mount} from "enzyme";
import '@testing-library/jest-dom';
import TicTacToeSquare from "../src/TicTacToeSquare/TicTacToeSquare";
import sinon from "sinon";

const ticTacToeSquare = shallow(<TicTacToeSquare />);
 

it('matches snapshot', () => {
    expect(ticTacToeSquare).toMatchSnapshot();
});
 
