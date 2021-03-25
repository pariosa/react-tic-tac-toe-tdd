import React, { Component } from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import TicTacToeGrid from "../src/TicTacToeGrid/TicTacToeGrid";

const initialState = {
    ticTacGrid:[
        [
            {row:"0", col:"0",value:""},
            {row:"0", col:"1",value:""},
            {row:"0", col:"2",value:""}
        ],
        [
            {row:"1", col:"0",value:""},
            {row:"1", col:"1",value:""},
            {row:"1", col:"2",value:""}
        ],
        [
            {row:"2", col:"0",value:""},
            {row:"2", col:"1",value:""},
            {row:"2", col:"2",value:""}
        ],
    ],
    result:undefined,
    options:{
        playerSymbol:"X"
    },
    gameOver:false
};
const ticTacToeGrid = shallow(<TicTacToeGrid state={initialState} />);

it('renders correctly', () => {  
    expect(ticTacToeGrid).toMatchSnapshot();
});
