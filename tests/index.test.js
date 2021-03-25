import React from 'react';
import { render } from '@testing-library/react';
import Layout from '../src/index';
import '@testing-library/jest-dom';
import { shallow, mount} from "enzyme";
import { initialState } from "../src/states/initialState"; 
import { testStateNonEmpty } from "../src/states/testStates";

const indexSnap = shallow(<Layout state={initialState} />);

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
    //console.log(testLayoutGrid.debug());
    testLayoutGrid.update();
    //console.log(testLayoutGrid.find('.tic-tac-square').at(1).debug())
    expect(testLayoutGrid.find(".tic-tac-square").at(8).prop("value")).toBe(testStateNonEmpty.ticTacGrid[2][2].value);
});

it('check to see if output of grid matches state object in state with data', () => {  
    const testLayoutGrid = mount(<Layout {...testStateNonEmpty} />); 
    testLayoutGrid.find('.tic-tac-square').at(8).simulate('click');
    //console.log(testLayoutGrid.debug());
    testLayoutGrid.update();
    //console.log(testLayoutGrid.find('.tic-tac-square').at(1).debug())
    expect(testLayoutGrid.find(".tic-tac-square").at(8).prop("value")).toBe(testStateNonEmpty.ticTacGrid[2][2].value);
});

it('checks a state where player O wins', ()=>{
    const testOGrid = mount(<Layout {...initialState} />);
    testOGrid.find('.tic-tac-square').at(2).simulate('click');
    testOGrid.find('.tic-tac-square').at(0).simulate('click');
    testOGrid.find('.tic-tac-square').at(1).simulate('click');
    testOGrid.find('.tic-tac-square').at(3).simulate('click');
    testOGrid.find('.tic-tac-square').at(4).simulate('click'); 
    testOGrid.find('.tic-tac-square').at(6).simulate('click'); 
    //console.log(testXGrid.debug());  
    expect(testOGrid.find(".result").find('h1').prop("result")).toBe("O");
});

it('checks a state where player X wins', ()=>{
    const testXGrid = mount(<Layout {...initialState} />);
    testXGrid.find('.tic-tac-square').at(0).simulate('click');
    testXGrid.find('.tic-tac-square').at(1).simulate('click');
    testXGrid.find('.tic-tac-square').at(4).simulate('click');
    testXGrid.find('.tic-tac-square').at(5).simulate('click');
    testXGrid.find('.tic-tac-square').at(8).simulate('click'); 
    //console.log(testXGrid.debug());  

    expect(testXGrid.find(".result").find('h1').prop("result")).toBe("X");
});

it('checks a draw state',() => {
    const testDrawGrid = mount(<Layout {...initialState} />);
    //expect(testLayoutGrid.hasClass('tic-tac-grid')).toEqual(true);
    testDrawGrid.find('.tic-tac-square').at(0).simulate('click');
    testDrawGrid.find('.tic-tac-square').at(1).simulate('click');
    testDrawGrid.find('.tic-tac-square').at(2).simulate('click');
    testDrawGrid.find('.tic-tac-square').at(6).simulate('click');
    testDrawGrid.find('.tic-tac-square').at(7).simulate('click');
    testDrawGrid.find('.tic-tac-square').at(8).simulate('click');
    testDrawGrid.find('.tic-tac-square').at(3).simulate('click');
    testDrawGrid.find('.tic-tac-square').at(4).simulate('click');
    testDrawGrid.find('.tic-tac-square').at(5).simulate('click');
    //console.log(testDrawGrid.debug());  
    expect(testDrawGrid.find(".result").find('h1').prop("result")).toBe("TIE");
    //expect(testDrawtGrid.find(".result").first())
});