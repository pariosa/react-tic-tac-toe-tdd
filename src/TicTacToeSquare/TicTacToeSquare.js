import React from 'react';
function TicTacToeSquare(props){
    const {userPress, x, y, value} = props;
    return(
        <>
            <div className="tic-tac-square" style={{display:"inline", fontSize:"50px",margin:"5%", cursor:"pointer"}} value={value} row={x} col={y} className={`row${x} col ${y}`} onClick={(e)=>userPress(e.nativeEvent)}>
                [  {value} ]
            </div>
        </>
    )
}
export default TicTacToeSquare;