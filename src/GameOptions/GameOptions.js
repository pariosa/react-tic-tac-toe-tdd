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
                <MDBInput gap className="mt-5" label="X" checked={playerSymbol === 'X'} value="X" onClick={() => setPlayerSymbol('X')} label="X" type="radio" />
                <MDBInput gap className="mt-5" label="O" checked={playerSymbol === 'O'} value="O" onClick={() => setPlayerSymbol('O')} label="O" type="radio" />
            </MDBContainer>
            <br/>
            <MDBContainer className="mt-5">
                <label>Do you want to go 1st or second?</label>
                <MDBInput gap className="mt-5" label="true" checked={playerFirst === true} value="true" onClick={() => setPlayerFirst(true)}  label="First" type="radio" />
                <MDBInput gap className="mt-5" label="false" checked={playerFirst === false} value="false" onClick={() => setPlayerFirst(false)}  label="Second" type="radio" />
            </MDBContainer>
        </div>
    );
}
export default GameOptions;