import React from 'react';
import './App.css';
import HeaderMenu from "./components/header/HeaderMenu";
import Header from "./components/header/Header";
import Button from "./components/instruments/Button/Button";

type NewcomerStateType = {

}

const NewcomerContainer = () => {

  const [guestExcursionMode, setGuestExcursionMode] = React.useState(true)

  const buttonExcursionClickHandle = () => {
    if (!guestExcursionMode) {
      setGuestExcursionMode(true)
      //добавить загрузку блока (или через юзеффект?)
    }
    //иначе просто прокрутить до след блока
  }

  const buttonRegistrationClickHandle = () => {
    if (guestExcursionMode) {
      setGuestExcursionMode(false)
    }
    //иначе просто прокрутить до след блока
  }


  return (
      <Header>
        <Button isSelected={ ! guestExcursionMode} onClick={buttonRegistrationClickHandle} >Register now</Button>
        <Button  isSelected={guestExcursionMode} onClick={buttonExcursionClickHandle} >Get Excursion</Button>
      </Header>
  )
}


const App = () => {

  const isAuth = false

  const sum = (a:number, b:number = 4) => a + b;

  return (
    <div className="App">
      <HeaderMenu isAuth={isAuth}/>
      <NewcomerContainer/>
    </div>
  );
}

export default App;
