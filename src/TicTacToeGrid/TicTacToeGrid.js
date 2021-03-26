import React from 'React';
import TicTacToeSquare from "../TicTacToeSquare/TicTacToeSquare";

function TicTacToeGrid(props){
    const { userPress, state } = props;
    const getRows = () =>{
        let rows=[];
        for(let x = 0; x < 3; x++){
            let row = [];
            for(let i = 0; i < 3; i++){
                const value = state.ticTacGrid[x][i].value; 
                row.push(
                    <TicTacToeSquare 
                        key={i} 
                        x={x} 
                        y={i} 
                        userPress={userPress} 
                        value={value} 
                        currentValue={state.options.playerSymbol} 
                    />
                );
            }
            rows.push(
                <div key={x} className="tic-tac-row">
                    {row}
                    <br/>
                </div>
            );
        }; 
        return rows;
    }
    return(
        <div className="tic-tac-grid">
            {getRows()}
        </div>
    )
}
export default TicTacToeGrid;