import React from 'react';
import './App.css';

import HeaderMenu from "./components/header/HeaderMenu";
import NewcomerContainer from "./components/newcomer/NewcomerContainer";
import {Footer} from "./components/styled/Styled"


const App = () => {

  const isAuth = false

  return (
    <div className="App">
      <HeaderMenu isAuth={isAuth}/>
      <NewcomerContainer/>
       <Footer><a href="https://github.com/evgeneh">@evgeneh</a> 2019 </Footer>
    </div>
  );
}

export default App;
