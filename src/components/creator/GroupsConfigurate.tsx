import * as React from 'react';

import {setGroupsCount, setVariantOfTournament} from "../../store/reducers/create-tournament/create-tournament-reducer";
import {ITournament, TournamentVariants} from "../../store/IStore";

import Col from '../styled/Col'
import Row from '../styled/Row'

import styled from "styled-components";

const TableEditor = styled.div`
  width: 350px;
  padding: 20px 0;
`

type GroupsConfigureProps = {
    variant: TournamentVariants
    tournament: ITournament
    setGroupsCount: typeof setGroupsCount
}

type CreateTableBadgeHType = {
    groupName: string
}
const CreateTableBadgeHeader: React.FC<CreateTableBadgeHType> = ({groupName}) => {
    return (
        <div className='list-group-item-active bg-success rounded-top'>
            <span className='glyphicon glyph icon-star'></span>
            <span className='text-white '>{groupName}</span>
        </div>
    )
}

type CreateTableBadgeItemType = {
    badge: string | null,
    name: string | null
}
const CreateTableBadgeItem: React.FC<CreateTableBadgeItemType> = ({badge, name}) => {
    return (
        <div className='list-group-item align-items-xl-start'>
            <button>+</button>
            <span className='glyph-icon glyph icon-star'>{badge || <i>&nbsp; team is not selected!</i>}</span>
            <span className='text-white'>name</span>
        </div>
    )
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
                <Col col=' col-6'>
                    {
                        tournament.groups.map((group, index) => {
                            return (
                                <TableEditor>
                                    <div className='list-group'>
                                        <CreateTableBadgeHeader groupName={'Group ' + index}/>
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