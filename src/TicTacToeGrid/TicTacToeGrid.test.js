import React from 'react';
import { render } from '@testing-library/react'; 
import '@testing-library/jest-dom';
import TicTacToeGrid from "./TicTacToeGrid";

it('renders correctly', () => {  
    const TicTacToeGrid = renderer.create(<TicTacToeGrid />);
    expect(TicTacToeGrid).toMatchSnapshot();
});