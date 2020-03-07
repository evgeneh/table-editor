import React from 'react';
import './App.css';

import {connect} from "react-redux";
import {RootStateType} from "./store";

import HeaderMenu from "./components/header/HeaderMenu";
import NewcomerContainer from "./components/newcomer/NewcomerContainer";
import CreatorContainer from "./components/creator/CreatorContainer";
import {Footer} from "./components/styled/Styled"

type AppType = {
    isAuth: boolean
}

const App: React.FC<AppType> = ({isAuth}) => {

    const mainContainer = isAuth ? <CreatorContainer/> : <NewcomerContainer/>

    return (
        <div className="App">
            <HeaderMenu isAuth={isAuth}/>
            {mainContainer}
            <Footer><a href="https://github.com/evgeneh">@evgeneh</a> 2019 </Footer>
        </div>
    );
}

const mapStateToProps = (state: RootStateType) => (
     { isAuth: state.auth.isAuth }
)

export default connect(mapStateToProps, {})(App);
