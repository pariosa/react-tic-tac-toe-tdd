import React from 'react';

function TicTacToeSquare(props){
    const {userPress, x, y, value} = props;

    return(
        <>
            <div value={value} row={x} col={y} className={`row${x} col ${y}`} onClick={(e)=>userPress(e.nativeEvent)}>
                [  {value} ]
            </div>
        </>
    )
}
export default TicTacToeSquare;