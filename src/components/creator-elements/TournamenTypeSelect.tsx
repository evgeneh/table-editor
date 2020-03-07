import * as React from 'react';

import Col from "../styled/Col";
import Row from "../styled/Row";
import {Section} from "../styled/Styled"

import styled from "styled-components";

import image_rg from "../../media/gr.jpg"
import image_rg_po from "../../media/gr_po.jpg"
import image_po from "../../media/po.jpg"
import {TournamentVariants} from "../../store/IStore";

interface Props  {
    isSelected: boolean
}

const TournTypeImg = styled.img`
  width: 100px;
  transition: .4s;

  &:hover{
    transform: scale(1.2);
}
`

const SelectionBlock = styled.div<Props>`
    text-align: center;
    color: black;
    margin: 5px;
    h4 {
    margin: 15px 0;
    border: ${p => (p.isSelected) ? "2px solid red" : "2px solid white"}
    }
`;

export interface SelectionElementType extends React.HTMLAttributes<HTMLDivElement> {
    isSelected: boolean;
    imageLink: string;
    text: string;
    description: string
}

const SelectionElement: React.FC<SelectionElementType> = ({isSelected, imageLink, text, description, onClick}) => {
    return (
        <SelectionBlock isSelected={isSelected} onClick={onClick}>
            <TournTypeImg src={imageLink} alt={text + " logo"} />
            <h4>{text}</h4>
            <p className={"p-2"}>{description}</p>

        </SelectionBlock>
    )
}

type TournamentVariantSelectProps = {
    selectedVariant?: TournamentVariants
    tournamentVariantSelect?: ((item: TournamentVariants) => void) | null
}


const TournamentVariantSelect: React.FC<TournamentVariantSelectProps> = ({selectedVariant , tournamentVariantSelect = null}) => {

    const onTournamentSelect = (value: TournamentVariants): void => {
        if (tournamentVariantSelect !== null)
            tournamentVariantSelect(value)
    }

    return (
        <Section>
            {
                ( selectedVariant !== undefined) &&
            <Row>
                <Col col={'col__fr'}>
                    <h3>Select variant of your tournament first</h3>
                </Col>
            </Row>
            }
            <Row>
                <Col col={'col__fr3'}>

                    <SelectionElement isSelected={selectedVariant === TournamentVariants.PO_GR}
                                      onClick={onTournamentSelect.bind(null, TournamentVariants.PO_GR)}
                                      imageLink={image_rg} text={"Groups and PlayOff"}
                                      description={"Select count of groups and teams which promote to play off stage"}/>
                    <SelectionElement isSelected={selectedVariant === TournamentVariants.PO}
                                      onClick={onTournamentSelect.bind(null, TournamentVariants.PO)}
                                      imageLink={image_rg_po} text={"Only PlayOff"}
                                      description={"Select head to head competition in play off stage"}/>
                    <SelectionElement isSelected={selectedVariant === TournamentVariants.LIG}
                                      onClick={onTournamentSelect.bind(null, TournamentVariants.LIG)}
                                      imageLink={image_po} text={"League without PlayOff"}
                                      description={"Select a league tournament, create your own league table"}/>

                </Col>
            </Row>
        </Section>

    )
}


export default TournamentVariantSelect