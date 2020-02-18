import React from 'react';
import backgroundHeader from '../../media/header_bg.jpg'

import Row from '../styled/Row'
import Col from '../styled/Col'

import style from "./Header.module.css"

type HeaderType = {
  children: React.ReactNode
}

const Header = ({children}: HeaderType) => {

    return (

            <header className={style.header} style={{backgroundImage: `url(${backgroundHeader})`}}>
                <Row>
                    <Col col={'col__fr'}>
                        <h1>Tournament table editor</h1>
                        <h3>Create your own tournament and fill it by results</h3>
                        <div>
                            {children}
                        </div>
                    </Col>
                </Row>
            </header>

    );
}

export default Header;
