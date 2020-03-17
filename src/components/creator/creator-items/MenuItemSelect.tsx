import * as React from 'react';
import plus from 'bootstrap-icons/icons/plus.svg'

import styled from 'styled-components'
import {RootStateType} from "../../../store";
import {connect, ConnectedProps} from "react-redux";
import {getCurrentLeague, getCurrentTeam} from "../../../store/selectors/team-selector";
import {setCurrentLeague, setCurrentTeam, SetTeamsList, addTeamToGroup} from "../../../store/reducers/actions";
import {useEffect} from "react";
import {getTeamsByLeague} from "../../../api/creator-api";

import TeamsListDropSelect from './menu-select-list/TeamsListDropSelect'

const MenuHiddenBody = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    background: transparent;
    width: 99%;
    height: 99%;
    z-index: 10;
`

const SelectTeamSplash = styled.div`
    background: white;
    white-space: nowrap;
    position: absolute;
    padding: 4px;
    border-radius: 3px;
    top: 10px;
    z-index: 20;
    box-shadow: 3px -2px 3px rgba(128,128,128,0.2);
    .blocks {
        margin-right: 20px;
    }
`;

type MenuTeamType = {
    closeMenu: (isShow: boolean) => void
    groupId: number
    teamPos: number
}

let initialMenuState = {league: false, team: false}

const MenuTeamSelect: React.FC<MenuTeamType & ReduxProps> = ({closeMenu, groupId, teamPos, ...props}) => {
    const [listShow, setListShow] = React.useState(initialMenuState)

    const toggleSetupLists = (type: 'league' | 'team', value: boolean) => {
        if (!value)
            setListShow({...listShow, [type]: false})
        else
            setListShow({...initialMenuState, [type]: true})
    }

    const handleItemSelect = (type: 'league' | 'team', id: number) => {
        if (type === 'league')
            props.setCurrentLeague(id)
        else
            props.setCurrentTeam(id)
        toggleSetupLists(type, false)
    }

    const addTeamHandle = () => {
        if (props.currentTeam) {
            closeMenu(false)
            props.addTeamToGroup(props.currentTeam, groupId, teamPos)
        }
    }

    //
    useEffect(() => {
        if (props.currentLeague) {
            let teams = getTeamsByLeague(props.currentLeague.id)
            if (teams) {
                props.SetTeamsList(teams)
            }
        }
    }, [props.currentLeague?.id])

    return (
        <>
            <MenuHiddenBody onClick={() => {
                closeMenu(false)
            }}/>
            <SelectTeamSplash>
                <div className="btn-group blocks">
                    <button type="button"
                            className="btn btn-secondary">
                        {props.currentLeague?.name || 'Select League'}
                    </button>
                    <button type="button" className="btn btn-secondary dropdown-toggle dropdown-toggle-split"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                            onClick={toggleSetupLists.bind(null, 'league', !listShow.league)}
                    >
                        <span className="sr-only">Toggle Dropdown</span>
                    </button>
                    <ul className={"dropdown-menu" + ((listShow.league) ? " show" : " ")}>
                        {
                            props.leagues.map((lig) => {
                                return <li key={lig.id} className="dropdown-item"
                                           onClick={handleItemSelect.bind(null, 'league', lig.id)}

                                >{lig.name}</li>
                            })
                        }
                        <li className="dropdown-divider"></li>
                        <li className="dropdown-item">All Leagues &#9658;</li>

                    </ul>
                </div>
                {
                    (props.teams) &&
                    <TeamsListDropSelect setListShow={toggleSetupLists}
                                         teams={props.teams}
                                         currentTeam={props.currentTeam}
                                         setCurrentTeam={handleItemSelect}
                                         teamsListShow={listShow.team}
                    />

                }
                <button className="btn btn-outline-light rounded-circle"
                        onClick={addTeamHandle}
                >
                    <img src={plus} alt="" width="30" height="32" title="Bootstrap"/>
                </button>
            </SelectTeamSplash>
        </>
    )
}

const mapDispatchToProps = (state: RootStateType) => {
    return {
        leagues: state.teamSelect.topSix,
        currentTeam: getCurrentTeam(state),
        currentLeague: getCurrentLeague(state),
        teams: state.teamSelect.teams
    }
}

const connector = connect(mapDispatchToProps, {setCurrentLeague, setCurrentTeam, SetTeamsList, addTeamToGroup})
type ReduxProps = ConnectedProps<typeof connector>

export default connector(MenuTeamSelect)
