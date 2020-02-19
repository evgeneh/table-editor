import * as React from 'react';

import Col from "../styled/Col";
import Row from "../styled/Row";

import LoginRegister from "./LoginRegister";
import {Section} from "../styled/Styled"

const Register = () => {

    return(
        <Section>
        <Row>
            <Col col={'col__fr'}>
                <h1>Registration</h1>
                <LoginRegister type={"register"}/>
            </Col>
        </Row>
        </Section>
 )}


export default Register