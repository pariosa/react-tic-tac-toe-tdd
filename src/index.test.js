import React from 'react';
import { render } from '@testing-library/react';
import Layout from './index';
import '@testing-library/jest-dom';
import { shallow, mount} from "enzyme";
import { initialState } from "./reducers/gameReducer";
import TicTacToeSquare from "./TicTacToeSquare/TicTacToeSquare" 
const indexSnap = shallow(<Layout state={initialState} />);
import { testStateNonEmpty } from "./states/testStates";
it('renders', ()=>{
    expect(indexSnap).toMatchSnapshot();
})

test('renders index element', ()=>{
    const { getByText } = render(<Layout state={initialState}/>);
    const title = getByText(/Tic Tac Toe/i);
    expect(title).toBeInTheDocument();
});

it("should change the state of the component when an empty space is clicked", () =>{
    const wrapper = mount(<Layout {...initialState} />); 
    //console.log(wrapper.debug());
    wrapper.find('.tic-tac-square').at(0).simulate('click');
    //console.log(wrapper.find('.tic-tac-square').at(0).prop("value"))
    expect(wrapper.find('.tic-tac-square').at(0).prop("value")).toBe("X");
});

it('check to see if output of grid matches state object in state with data', () => {  
    const testLayoutGrid = mount(<Layout {...testStateNonEmpty} />);
    //expect(testLayoutGrid.hasClass('tic-tac-grid')).toEqual(true);
    testLayoutGrid.find('.tic-tac-square').at(8).simulate('click');
    console.log(testLayoutGrid.debug());
    testLayoutGrid.update();
    console.log(testLayoutGrid.find('.tic-tac-square').at(1).debug())
    expect(testLayoutGrid.find(".tic-tac-square").at(8).prop("value")).toBe(testStateNonEmpty.ticTacGrid[2][2].value);
});