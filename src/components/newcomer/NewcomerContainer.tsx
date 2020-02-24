import React from 'react';

import Header from "../header/Header";
import Button from "../instruments/Button/Button";
import Register from "../login-register/Register";

import Excursion from "./Excursion";

type NewcomerStateType = {

}

const NewcomerContainer = () => {
    //переключение между страницей регистрации или режимом эксурсии
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

    //в хедере для незарег. пользователей кнопки вызова формы регистрации и экскурсии
    //----для зарег. выбор эдитора таблиц либо просотр своих таблиц
  return (
      <>
        <Header>
            <Button isSelected={ ! guestExcursionMode} onClick={buttonRegistrationClickHandle} >Register now</Button>
            <Button  isSelected={guestExcursionMode} onClick={buttonExcursionClickHandle} >Get Excursion</Button>
        </Header>

          {
           (guestExcursionMode) ?
               <Excursion /> :
               <Register />
          }
      </>
  )
}


export default NewcomerContainer;
