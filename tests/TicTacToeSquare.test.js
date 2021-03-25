import React from 'react';
import { shallow } from "enzyme";
import '@testing-library/jest-dom';
import TicTacToeSquare from "../src/TicTacToeSquare/TicTacToeSquare";

const ticTacToeSquare = shallow(<TicTacToeSquare />);


it('renders correctly', () => {  
    expect(ticTacToeSquare).toMatchSnapshot();
});

it("should change the state of the component when an empty space is clicked", () =>{
    const initialState = {x:"0",y:"0", value:""}
    const testComponent = shallow(<TicTacToeSquare state={initialState}/>);
    testComponent.simulate('click');
    console.log(testComponent.childAt(0).prop("value"))
    expect(testComponent.childAt(0).prop("value")).toBe(undefined)
})