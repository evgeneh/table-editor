import * as React from 'react';

import Col from "../styled/Col";
import Row from "../styled/Row";

import {Section} from "../styled/Styled"

import TournamentTypeSelect from "../creator-elements/TournamenTypeSelect"

const Excursion = () => {

    return(
        <Section>
            <Row>
                <Col col={'col__fr'}>
                    <h1>Newcomer excursion</h1>
                    <h3>You can crate three types of tournament</h3>
                </Col>
            </Row>
            <TournamentTypeSelect />
        </Section>
 )}


export default Excursion