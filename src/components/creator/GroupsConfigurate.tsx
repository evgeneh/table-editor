import * as React from 'react';

import {setGroupsCount} from "../../store/reducers/actions";
import {ITournament, TournamentVariants} from "../../store/IStore";

import {CreateTableBadgeHeader, CreateTableBadgeItem} from './creator-items/GroupsConfigurateItems'

import Col from '../styled/Col'
import Row from '../styled/Row'

import styled from "styled-components";
import CreateTableBadgeSettings from "./creator-items/CreateTableBadgeSettings";

const TableEditor = styled.div`
  width: 370px;
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

    const [groupsWithOpenSettings, setGroupsWithOpenSettings] = React.useState<Array<number>>([])

    const ToggleSettings = (groupId: number) => {
        setGroupsWithOpenSettings((prev) => {
            if (prev.includes(groupId))
                return prev.filter((id) => id != groupId)
            else return [...prev, groupId]
        })
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
                                <TableEditor key={group.groupId}>
                                    <div className='list-group'>
                                        <CreateTableBadgeHeader groupName={'Group ' + (groupIndex + 1)}
                                                                ToggleSettings = {ToggleSettings.bind(null,group.groupId)}
                                        />
                                        {(groupsWithOpenSettings.includes(group.groupId)) && <CreateTableBadgeSettings />}
                                        {
                                            group.teams.map( (team, index)=> {
                                                    if (index < group.teamsCount)
                                                        return <CreateTableBadgeItem key={index} groupId={group.groupId} teamPos={index}
                                                                                     badge={team?.badge || null} name={team?.name || null} />
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
