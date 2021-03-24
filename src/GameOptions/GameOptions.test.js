import React from 'react';
import { render } from '@testing-library/react'; 
import '@testing-library/jest-dom';
import GameOptions from "./GameOptions";

it('renders correctly', () => {  
    const GameOptions = renderer.create(<GameOptions />);
    expect(GameOptions).toMatchSnapshot();
});