import * as React from 'react';

import {setGroupsCount, setVariantOfTournament} from "../../store/reducers/create-tournament/create-tournament-reducer";
import {ITournament, TournamentVariants} from "../../store/IStore";

import {CreateTableBadgeHeader, CreateTableBadgeItem} from './creator-items/GroupsConfigurateItems'

import Col from '../styled/Col'
import Row from '../styled/Row'

import styled from "styled-components";

const TableEditor = styled.div`
  width: 400px;
  padding: 20px 0;
`

type GroupsConfigureProps = {
    variant: TournamentVariants
    tournament: ITournament
    setGroupsCount: typeof setGroupsCount
}

const GroupsConfigure: React.FC<GroupsConfigureProps> = ({tournament, variant, setGroupsCount}) => {
    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        setGroupsCount(parseInt(e.currentTarget.value))
    }

    if (variant === TournamentVariants.PO_GR)
        return (
            <Row>
                <Col col='col__fr'>

                    <h3>Select tournament name and groups count</h3>
                    <div>
                        <span>Groups count:&nbsp;&nbsp;</span>
                        <input type='number' min='2' max='32'
                               value={tournament.groupsCount} onChange={handleChange}
                        />

                    </div>
                </Col>
                <Col col='col__fr2'>
                    {
                        tournament.groups.map((group, groupIndex) => {
                            if (groupIndex < tournament.groupsCount)
                            return (
                                <TableEditor>
                                    <div className='list-group'>
                                        <CreateTableBadgeHeader groupName={'Group ' + (groupIndex + 1)}/>
                                        {
                                            group.teams.map( (team, index)=> {
                                                    if (index < group.teamsCount)
                                                        return <CreateTableBadgeItem badge={team?.badge || null} name={team?.name || null} />
                                                }
                                            )
                                        }
                                    </div>
                                </TableEditor>)
                        })
                    }

                </Col>
            </Row>
        )

    return <></>
}

export default GroupsConfigure