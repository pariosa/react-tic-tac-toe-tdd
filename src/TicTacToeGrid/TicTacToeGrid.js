import React from 'React';
import TicTacToeSquare from "../TicTacToeSquare/TicTacToeSquare";

function TicTacToeGrid(){
    const getRows = () =>{
        let rows=[];
        for(let x = 0; x < 3; x++){
            let row = [];
            for(let i = 0; i < 3; i++){
                row.push(<TicTacToeSquare key={i} x={x} y={i} />);
            }
            rows.push(
                <div key={x} className="tic-tac-row">
                    {row}
                </div>
            );
        }; 
        return rows;
    }
    return(
        <div>
            {getRows()}
        </div>
    )
}
export default TicTacToeGrid;