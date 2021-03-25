import winningState from '../states/winningStates';
import initialState from '../states/initialState';

const gameReducer = (state,action) =>{ 
    switch(action.type){
        case "update_cell":
            if(action.payload.target.getAttribute("Value") === "X" || action.payload.target.getAttribute("Value") === "O"|| state.gameOver !== false){
                return state;
            }
            const row = action.payload.target.getAttribute('row');
            const col = action.payload.target.getAttribute('col');
            const symbol = state.options.playerSymbol;
            const nextSymbol = state.options.playerSymbol === "X" ? "O": "X";
            let nextState = {...state, 
                options:{playerSymbol:nextSymbol},
                ticTacGrid: state.ticTacGrid.map(
                    (gridRow, index) =>{ 
                        return (index).toString() != row ? gridRow : [
                            ...gridRow.map(
                                (cell, indexY) =>{ 
                                    return (indexY).toString() != col ? cell :
                                    {...cell,value:symbol}
                                } 
                            )
                        ]
                    }
                )
            };
            const isWon = winningState(nextState);  
            isWon ? 
                nextState = {...nextState,gameOver:isWon,result:isWon}
                : nextState;
            return nextState;
        case "result":
            return {...state, result:action}
        case "game_over":
            return {...state, gameOver:isWon};
        case "reset":
            return initialState;
    }
} 
export default gameReducer;