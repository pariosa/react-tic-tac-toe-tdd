import React from 'react';
import ReactDOM from "react-dom";
import Layout from "./index";

function App(){
    return(
        <Layout/>
    )
}

ReactDOM.render(
    React.createElement(App, null),
    document.getElementById("app")
  );
    
module.hot.accept();
