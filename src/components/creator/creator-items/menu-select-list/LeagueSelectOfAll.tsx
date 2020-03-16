import * as React from 'react';

import styled from 'styled-components'
import {RootStateType} from "../../../../store";
import {connect, ConnectedProps} from "react-redux";
import {getCurrentLeague, getCurrentTeam} from "../../../../store/selectors/team-selector";
import {setCurrentLeague} from "../../../../store/reducers/actions";

const SelectLeagueSplash = styled.div`
    position; absolute;
    top: 0;
    left: 0
    background: white;
    margin: 20px auto;
    padding: 10px;
    z-index: 30;
`

type LeagueSelectOfAllType = {
    leagues: Array<any>
    handleItemSelect: (id: number) => void
}

const LeagueSelectOfAll: React.FC<LeagueSelectOfAllType & ReduxProps> = ({leagues, handleItemSelect}) => {
    return (

            <SelectLeagueSplash >
                {
                    leagues.map( (lig) => {
                        return <li key={lig.id} className="dropdown-item"
                                   onClick={ handleItemSelect.bind(null, lig.id) }

                        >{lig.name}</li>
                    })
                }
            </SelectLeagueSplash>
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

const connector = connect(mapDispatchToProps, {setCurrentLeague})
type ReduxProps = ConnectedProps<typeof connector>

export default connector(LeagueSelectOfAll)
