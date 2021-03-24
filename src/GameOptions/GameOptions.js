import React, { useState } from 'react';
import { MDBContainer, MDBInput } from "mdbreact";

function GameOptions(){
    const [playerSymbol, setPlayerSymbol] = useState('X');
    const [playerFirst, setPlayerFirst] = useState(true);
    const [optionsDisabled, setOptionsDisabled] = useState(false); 
    return(
        <div> 
            <MDBContainer className="mt-5">
                <label>Symbol</label>
                <MDBInput gap label="X" checked={playerSymbol === 'X'} value="X" onClick={() => setPlayerSymbol('X')} />
                <MDBInput gap label="O" checked={playerSymbol === '0'} value="0" onClick={() => setPlayerSymbol('O')} />
            </MDBContainer>
            <br/>
            <MDBContainer className="mt-5">
                <label>Do you want to go 1st or second?</label>
                <Form.Radio label="true" checked={playerFirst === true} value="X" onClick={() => setPlayerFirst(true)} />
                <Form.Radio label="false" checked={playerFirst === false} value="0" onClick={() => setPlayerSymbol(false)} />
            </MDBContainer>
        </div>
    );
}
export default GameOptions;