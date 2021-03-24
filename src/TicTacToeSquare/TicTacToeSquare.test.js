import React from 'react';
import { render } from '@testing-library/react'; 
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import TicTacToeSquare from "./TicTacToeSquare";

it('renders correctly', () => {  
    const TicTacToeSquare = renderer.create(<TicTacToeSquare />);
    expect(TicTacToeSquare).toMatchSnapshot();
});