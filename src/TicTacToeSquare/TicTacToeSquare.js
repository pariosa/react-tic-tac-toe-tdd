import React from 'react';

function TicTacToeSquare(props){
    const {userPress, x, y, value, currentValue} = props; 
    const [isHover, setIsHover] = React.useState(false);
    const handleMouseHover = (bool)=>{ 
        setIsHover(bool); 
    };
    
    return(
        <>
        
            <div 
                value={value}  
                onMouseEnter={()=>{handleMouseHover(true)}} 
                onMouseLeave={()=>{handleMouseHover(false)}} 
                row={x} 
                col={y} 
                className={`row${x} col${y} tic-tac-square`} 
                onClick={(e)=>userPress(e.nativeEvent)}
            >
               
                  
               
                         
                            {value === "X" ?
                                "❌":
                                null
                            }
                            {value === "O"?
                                "🌎":
                                null
                            } 
                        
                        <div>
                        {
                isHover && (value !== "X" && value !== "O")
                ? 
                 <div className="translucent">
                    {currentValue === "X" ?
                    "❌":
                    null} 
                    {
                    currentValue === "O"?
                        "🌎":
                        null
                    }
                    </div>
                    
                    :
                       null
                    }   
                    </div>
            </div>
           
        </>
    )
}
export default TicTacToeSquare;