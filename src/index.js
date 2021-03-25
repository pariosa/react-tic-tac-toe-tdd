import React, {useReducer} from 'react'; 
import TicTacToeGrid from "./TicTacToeGrid/TicTacToeGrid"; 
const winningState = (state) =>{
    let winFlag = 0;
    let winTeam = "";
     
    //if one row has all the same val
    state.ticTacGrid.forEach((row)=>{
        if((row[0].value === row[1].value)&& (row[0].value === row[2].value) && (row[0].value !== "")){
            winFlag = 1;
            winTeam = row[0].value
        }
    }); 

    //if one col has all the same val
    let result = [];
    for(let i = 0; i < 3 ; i++){
        state.ticTacGrid.forEach(e => {
          result.push(e[i]);
        });
    };

    if((result[0].value === result[1].value) && (result[0].value === result[2].value) && (result[0].value !== "")){
        winFlag = 1;
        winTeam = result[0].value
    }
    if((result[3].value === result[4].value) && (result[3].value === result[5].value) && (result[3].value !== "")){
        winFlag = 1;
        winTeam = result[3].value
    }
    if((result[6].value === result[7].value) && (result[6].value === result[8].value) && (result[6].value !== "")){
        winFlag = 1;
        winTeam = result[6].value
    }  
  

    //tie status, all slots are non ""
    let emptyFlag = 0
    result.forEach(e=>{ if(e.value !== "O" || e.value !=="X"){emptyFlag += 1}})
    

    //if(row(0) col(0), row(1) col(1), and row(2) col(2) are all the same val
        const conA = state.ticTacGrid[0][0].value;
        const conB = state.ticTacGrid[1][1].value;
        const conC = state.ticTacGrid[2][2].value; 
        if((conA === conB) && (conA === conC) && (conA !== "")){
            winFlag = 1;
            winTeam = conA;
        }   


    //if row(0) col(2), row(1) col(1), and row(2), col(0) are all the same val
        const con1 = state.ticTacGrid[0][2].value;
        const con2 = state.ticTacGrid[1][1].value;
        const con3 = state.ticTacGrid[2][0].value;
        if((con1 === con2) && (con1 === con3) && (con1 !== "")){
            winFlag = 1;
            winTeam = con1;
        } 
        if (emptyFlag === 0){
            return("Tie");
        }
         
        //return winFlag === 1 ? true : false;
        return (winFlag, winTeam);
};
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
    result:undefined,
    options:{
        playerSymbol:"X"
    },
    gameOver:false
};
const reducer = (state,action) =>{ 
    switch(action.type){
        case "update_cell":
            if(action.payload.target.getAttribute("Value") === "X" || action.payload.target.getAttribute("Value") === "O"){
                return state;
            }
            const row = action.payload.target.getAttribute('row');
            const col = action.payload.target.getAttribute('col');
            const symbol = state.options.playerSymbol;
            const nextSymbol = state.options.playerSymbol === "X" ? "O": "X";
            console.log();
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
function Layout(){ 
        const [state,dispatch] = useReducer(reducer, initialState);
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
                <h1 style={{color:"red"}}>the winner is {state.result}
                <br/>
                 <button onClick={ ()=>{dispatch({type:"reset"})}} >RESET</button>
                 </h1>
                : 
                <h1 style={{color:"green"}}>the game is on
                   
                </h1>
                }
            </div> 
        ); 
    
  }

export default Layout;