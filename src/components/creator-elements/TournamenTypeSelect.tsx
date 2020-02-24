import * as React from 'react';

import Col from "../styled/Col";
import Row from "../styled/Row";

import styled from "styled-components";

import image_rg from "../../media/gr.jpg"
import image_rg_po from "../../media/gr_po.jpg"
import image_po from "../../media/po.jpg"

interface Props  {
    isSelected: boolean
}

const SelectionBlock = styled.div<Props>`
    text-align: center;
    color: black;
    img {
        width: 100px;
    }
    h3 {
    border: ${p => (p.isSelected) ? "2px solid red" : "none"}
    }
`;

export type SelectionElementType = {
    isSelected: boolean
    imageLink: string
    text: string
    description: string
}

const SelectionElement: React.FC<SelectionElementType> = ({isSelected, imageLink, text, description}) => {
    return (
        <SelectionBlock isSelected={isSelected}>
            <img src={imageLink} alt={text + " logo"} />
            <h3>{text}</h3>
            <p>{description}</p>

        </SelectionBlock>
    )
}

const TournamentTypeSelect = () => {

    return(
        <Row>
            <Col col={'col__fr3'}>

                <SelectionElement isSelected={false} imageLink={image_rg} text={"Groups and PlayOff"}
                                  description={"Select count of groups and teams which promote to play off stadie"}/>
                <SelectionElement isSelected={true} imageLink={image_rg_po} text={"Groups and PlayOff"}
                                  description={"Select count of groups and teams which promote to play off stadie"}/>
                <SelectionElement isSelected={false} imageLink={image_po} text={"Groups and PlayOff"}
                                  description={"Select count of groups and teams which promote to play off stadie"}/>

            </Col>
        </Row>

 )}


export default TournamentTypeSelect