import React from 'react';
import logo from '../../media/logo.gif';

import Row from '../styled/Row'
import Col from '../styled/Col'

import style from "./Header.module.css"

type HeaderMenuType = {
  isAuth: boolean
}

const HeaderMenu = ({isAuth}: HeaderMenuType) => {

    let loginLogoutName = (isAuth) ? "Profile" : "Login"

    return (
        <header className={style.menuBar}>
            <Row>
                <Col col={'col__auto_fr'}>
                    <img src={logo} alt="TABLE EDITOR" height={"70px"}/>

                    <nav>
                        <ul className={style.mainMenu}>
                            <li className={style.mainMenu__item}><a href="/">Home</a></li>
                            <li className={style.mainMenu__item}><a href="#">{loginLogoutName}</a></li>
                            <li className={style.mainMenu__item}><a href="#">Popular tables</a></li>
                            <li className={style.mainMenu__item}><a href="#">Search</a></li>
                        </ul>
                    </nav>
                </Col>
            </Row>
        </header>
    )

}

export default HeaderMenu;
