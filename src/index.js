import React from 'react'; 
import TicTacToeGrid from "./TicTacToeGrid/TicTacToeGrid";
import GameOptions from "./GameOptions/GameOptions";

function Layout (){  
    return ( 
        <div className="Layout">
            <h1>Tic Tac Toe</h1>
            <GameOptions />
            <TicTacToeGrid />
        </div> 
    ); 
  }

export default Layout;