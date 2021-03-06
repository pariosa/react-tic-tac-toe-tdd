import React, {useReducer} from 'react'; 
import TicTacToeGrid from "./TicTacToeGrid/TicTacToeGrid"; 
import gameReducer from './reducers/gameReducer';
import initialState  from './states/initialState';
import "./TicTacToeSquare/TicTacToeSquare.css";
import "./TicTacToeGrid/TicTacToeGrid.css";
import "./index.css";
function Layout(){ 
    const [state,dispatch] = useReducer(gameReducer, initialState);
    const handleUserPress = (payload) => {
        dispatch({type:"update_cell",payload:payload});
    };
    return ( 
        <div className="Layout">
            <h1 className="title font-effect-anaglyph">Tic Tac Toe</h1> 
            <TicTacToeGrid 
                state={state}
                userPress={handleUserPress}
            />
            { state.gameOver ? 
                <>
                {(state.result === "TIE") ? 
                    <h2 
                        className="result" 
                        result={state.result} 
                        style={{color:"orange"}}
                    >
                        It's a {state.result}
                    </h2>
                : 
                    <h2 
                        className="result" 
                        result={state.result} 
                        style={{color:"red"}}
                    >
                        the winner is {state.result}
                    </h2>
                }
                </>
            :
                <h1 
                    className="result" 
                    result={state.result} 
                    style={{color:"green"}
                }>
                    the game is active, next move: {state.options.playerSymbol}
                </h1>
            }  
                <br/> 
                <div className="btn-contain">
                    <button 
                        onClick={ ()=>{dispatch({type:"reset"})}}
                    > 
                        RESET
                    </button>
                </div> 
            {state.history.length > 0 ?
                        <div className="btn-contain"> 
                            <button 
                                className="rewind" 
                                onClick={ ()=>{dispatch({type:"rewind_time"})}}
                            > 
                                REWIND TIME 
                            </button>
                        </div>
            :
                 <h3>Player ??? goes first</h3>
            }
        </div> 
    ); 
}
export default Layout;