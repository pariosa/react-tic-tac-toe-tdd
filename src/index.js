import React, {useReducer} from 'react'; 
import TicTacToeGrid from "./TicTacToeGrid/TicTacToeGrid"; 
import gameReducer from './reducers/gameReducer';
import initialState  from './states/initialState';
function Layout(){ 
    const [state,dispatch] = useReducer(gameReducer, initialState);
    const handleUserPress = (payload) => {
        dispatch({type:"update_cell",payload:payload});
    }
    return ( 
        <div className="Layout">
            <h1>Tic Tac Toe</h1> 
            <TicTacToeGrid 
                state={state}
                userPress={handleUserPress}
            />
            { state.gameOver ? 
            <h1 style={{color:"red"}}>
                the winner is {state.result}
                <br/>
                <button onClick={ ()=>{dispatch({type:"reset"})}}> RESET </button>
            </h1>
            : 
            <h1 style={{color:"green"}}>the game is on</h1>
            }
        </div> 
    ); 
}
export default Layout;