import React from 'react'; 
import TicTacToeGrid from "./TicTacToeGrid/TicTacToeGrid";

function Layout (){  
    return ( 
        <div className="Layout">
            <h1>Tic Tac Toe</h1>
            <TicTacToeGrid />
        </div> 
    ); 
  }

export default Layout;