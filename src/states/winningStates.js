export default function winningState(state){
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
            return(true,"Tie");
        }
         
        //return winFlag === 1 ? true : false;
        return (winFlag, winTeam);
};