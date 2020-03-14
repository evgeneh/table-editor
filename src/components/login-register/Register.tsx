import * as React from 'react';

import Col from "../styled/Col";
import Row from "../styled/Row";

import LoginRegister from "./LoginRegister";
import {Section} from "../styled/Styled"
import {connect} from "react-redux";
import {setAuth} from "../../store/reducers/actions"

type RegisterPropType = {
    setAuth: typeof setAuth
}

const Register: React.FC<RegisterPropType> = ({setAuth}) => {

    const  handleRegister = (login: string, myId: number) => {
        localStorage.setItem('TABLE-EDITOR', login)
        setAuth(login, myId)
    }

    return(
        <Section>
        <Row>
            <Col col={'col__auto_fr'}>
                <h1>Registration</h1>
                <LoginRegister  handleSubmit={handleRegister} type={"register"}/>
            </Col>
        </Row>
        </Section>
 )}

export default connect(null,{setAuth})(Register)