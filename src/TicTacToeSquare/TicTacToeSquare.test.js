import React from 'react';
import { render } from '@testing-library/react'; 
import '@testing-library/jest-dom';
import TicTacToeSquare from "./TicTacToeSquare";

it('renders correctly', () => {  
    const TicTacToeSquare = renderer.create(<GTicTacToeSquare />);
    expect(TicTacToeSquare).toMatchSnapshot();
});