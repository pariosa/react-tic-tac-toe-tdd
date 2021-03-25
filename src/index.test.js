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
    const wrapper = mount(<Layout state={initialState} />);
    //console.log(wrapper.find(TicTacToeSquare));
    //wrapper.find('.tic-tac-square')[0].simulate('click');
    //console.log(testComponent.childAt(0).prop("value"))
    //expect(testComponent.childAt(0).prop("value")).toBe(undefined);
});

it('check to see if output of grid matches state object', () => {  
    const props = testStateNonEmpty;
    const testLayoutGrid = mount(<Layout {...props} />).find('.tic-tac-grid');
    console.log(testLayoutGrid);
    expect(testLayoutGrid.hasClass('.tic-tac-grid')).toEqual(true);
});