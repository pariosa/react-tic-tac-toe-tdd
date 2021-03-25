import React from 'react';

function TicTacToeSquare(props){
    const {userPress, x, y, value} = props; 
    return(
        <>
            <div value={value} row={x} col={y} className={`row${x} col${y} tic-tac-square`} onClick={(e)=>userPress(e.nativeEvent)}>
                {value ==="X" ?
                    "❌":
                    ""
                }
                {value === "O"?
                    "🌎":
                    ""
                }
                    
            </div>
        </>
    )
}
export default TicTacToeSquare;