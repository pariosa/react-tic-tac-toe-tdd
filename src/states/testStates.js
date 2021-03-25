export const testStateNonEmpty = {
    ticTacGrid:[
        [
            {row:"0", col:"0",value:"X"},
            {row:"0", col:"1",value:""},
            {row:"0", col:"2",value:"O"}
        ],
        [
            {row:"1", col:"0",value:""},
            {row:"1", col:"1",value:"X"},
            {row:"1", col:"2",value:""}
        ],
        [
            {row:"2", col:"0",value:"O"},
            {row:"2", col:"1",value:""},
            {row:"2", col:"2",value:"X"}
        ],
    ],
    result:undefined,
    options:{
        playerSymbol:"X"
    },
    gameOver:false
};