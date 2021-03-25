import React, {useReducer} from 'react'; 
import TicTacToeGrid from "./TicTacToeGrid/TicTacToeGrid"; 
import gameReducer from './reducers/gameReducer';
import initialState  from './states/initialState';
import "./TicTacToeSquare/TicTacToeSquare.css";
import "./TicTacToeGrid/TicTacToeGrid.css";

function Layout(){ 
    const [state,dispatch] = useReducer(gameReducer, initialState);
    const handleUserPress = (payload) => {
        dispatch({type:"update_cell",payload:payload});
    };
    return ( 
        <div className="Layout">
            <h1>Tic Tac Toe</h1> 
            <TicTacToeGrid 
                state={state}
                userPress={handleUserPress}
            />
            { state.gameOver ? 
                <>
                {(state.result === "TIE") ? 
                    <h1 className="result" result={state.result} style={{color:"orange"}}>
                        It's a {state.result}
                    </h1>
                : 
                    <h1 className="result" result={state.result} style={{color:"red"}}>
                        the winner is {state.result}
                    </h1>
                }
                    <br/>
                    <button onClick={ ()=>{dispatch({type:"reset"})}}> RESET </button>
                </>
            :
                <h1 className="result" result={state.result} style={{color:"green"}}>the game is on</h1>
            }  
        </div> 
    ); 
}
export default Layout;