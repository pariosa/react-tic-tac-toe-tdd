import React from 'react'; 
import '@testing-library/jest-dom';
import GameOptions from "../src/GameOptions/GameOptions"; 
import { shallow } from 'enzyme'; 

const gameOptions  = shallow(<GameOptions />);

it('renders correctly', () => {  
    expect(gameOptions).toMatchSnapshot();
});