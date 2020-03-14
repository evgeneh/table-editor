import * as React from 'react';
import plus from 'bootstrap-icons/icons/plus.svg'

import styled from 'styled-components'
import {RootStateType} from "../../../store";
import {connect, ConnectedProps} from "react-redux";
import {getCurrentLeague} from "../../../store/selectors/team-selector";
import {setCurrentLeague} from "../../../store/reducers/actions";

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
    position: absolute;
    padding: 4px;
    border-radius: 3px;
    top: 10px;
    z-index: 20;
    box-shadow: 3px -2px 3px rgba(128,128,128,0.2);
`;


type MenuTeamType = {
    closeMenu: (isShow: boolean) => void
}

const MenuTeamSelect: React.FC<MenuTeamType & ReduxProps> = ({closeMenu, ...props}) => {
    const [listShow, setListShow] = React.useState(false)

    return (
        <>
            <MenuHiddenBody onClick={() => {
                closeMenu(false)
            }}/>
            <SelectTeamSplash>
                <div className="btn-group">
                    <button type="button" className="btn btn-secondary">{props.currentLeague?.name || 'Select League'}</button>
                    <button type="button" className="btn btn-secondary dropdown-toggle dropdown-toggle-split"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                            onClick={()=>{setListShow(!listShow)}}
                    >
                        <span className="sr-only">Toggle Dropdown</span>
                    </button>
                    <ul className={"dropdown-menu" + ((listShow) ? " show" : " ")}>
                        {
                            props.leagues.map( (lig) => {
                            return <li key={lig.id} className="dropdown-item"
                                       onClick={props.setCurrentLeague.bind(null, lig.id)}
                            >{lig.name}</li>
                            })
                        }

                        <li className="dropdown-divider"></li>
                        <li className="dropdown-item" >All Leagues</li>
                    </ul>
                </div>
                <button className="btn btn-outline-light rounded-circle">
                    <img src={plus} alt="" width="30" height="32" title="Bootstrap"/>
                </button>
            </SelectTeamSplash>
        </>
    )
}

const mapDispatchToProps = (state: RootStateType) => {
    return {
        leagues: state.teamSelect.topSix,
        currentTeam: state.teamSelect.currentTeamId,
        currentLeague: getCurrentLeague(state),
        teams: state.teamSelect.teams
    }
}

const connector = connect(mapDispatchToProps, {setCurrentLeague})
type ReduxProps = ConnectedProps<typeof connector>

export default connector(MenuTeamSelect)
