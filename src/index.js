import React, {useReducer} from 'react'; 
import TicTacToeGrid from "./TicTacToeGrid/TicTacToeGrid";
import GameOptions from "./GameOptions/GameOptions"; 

const initialState = {
    ticTacGrid:[
        [
            {row:"0", col:"0",value:""},
            {row:"0", col:"1",value:""},
            {row:"0", col:"2",value:""}
        ],
        [
            {row:"1", col:"0",value:""},
            {row:"1", col:"1",value:""},
            {row:"1", col:"2",value:""}
        ],
        [
            {row:"2", col:"0",value:""},
            {row:"2", col:"1",value:""},
            {row:"2", col:"2",value:""}
        ],
    ],
    options:{
        playerSymbol:"X"
    }
};

const reducer = (state,action) =>{ 
    switch(action.type){
        case "update_cell":
            const row = action.payload.target.getAttribute('row');
            const col = action.payload.target.getAttribute('col');
            const symbol = state.options.playerSymbol;
            const nextSymbol = state.options.playerSymbol === "X" ? "O": "X";
            console.log();
            return{...state, 
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
    }
} 
function Layout(){ 
        const [state,dispatch] = useReducer(reducer, initialState);
        const handleUserPress = (payload) => {
            dispatch({type:"update_cell",payload:payload});
        }

        return ( 
            <div className="Layout">
                <h1>Tic Tac Toe</h1>
                <GameOptions />
                <TicTacToeGrid 
                    state={state}
                    userPress={handleUserPress}
                />
            </div> 
        ); 
    
  }

export default Layout;