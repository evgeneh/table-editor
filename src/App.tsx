import React from 'react';
import './App.css';

import {connect} from "react-redux";
import {RootStateType} from "./store";

import HeaderMenu from "./components/header/HeaderMenu";
import NewcomerContainer from "./components/newcomer/NewcomerContainer";
import CreatorContainer from "./components/creator/CreatorContainer";
import {Footer} from "./components/styled/Styled"
import {setInitialize} from "./store/reducers/actions";

import Preloader from "./components/common/Preloader"

type AppType = {
    isAuth: boolean
    isInitialize: boolean
    setInitialize: (login: string, isAuth: boolean) => void
}

const App: React.FC<AppType> = ({isAuth, isInitialize, setInitialize}) => {

    React.useEffect(() => {
        let login = localStorage.getItem('TABLE-EDITOR')
        if (!login)
            setInitialize('', false)
        else
            setInitialize(login, true)
    }, [])

    const mainContainer = isAuth ? <CreatorContainer/> : <NewcomerContainer/>

    if (!isInitialize) return <Preloader/>

    return (
        <div className="App">
            <HeaderMenu isAuth={isAuth}/>
            {mainContainer}
            <Footer><a href="https://github.com/evgeneh">@evgeneh</a> 2019 </Footer>
        </div>
    );
}

const mapStateToProps = (state: RootStateType) => (
     {
         isAuth: state.auth.isAuth,
         isInitialize: state.auth.isInitialize
     }
)

export default connect(mapStateToProps, {setInitialize})(App);
