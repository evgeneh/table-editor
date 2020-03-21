import * as React from 'react';
import {connect, ConnectedProps} from "react-redux";

import {RootStateType} from "../../store";
import TournamentVariantSelect from "../creator-elements/TournamenTypeSelect";
import {setGroupsCount, setVariantOfTournament} from "../../store/reducers/actions"
import Button from "../instruments/Button/Button";
import Header from "../header/Header";

import GroupsConfigure from './GroupsConfigurate'

const CreatorContainer: React.FC<PropsFromRedux> = (props) => {

/* React.useEffect(()=> { },[])*/
    return(
        <>
            <Header>
                <Button isSelected={true}>Create Table</Button>
                <Button  isSelected={false} >My tournaments</Button>
            </Header>
            <TournamentVariantSelect tournamentVariantSelect={props.setVariantOfTournament}
                                     selectedVariant={props.variantOfTournament}/>
            <GroupsConfigure tournament={props.tournament}
                             variant={props.variantOfTournament}
                             setGroupsCount={props.setGroupsCount}
            />

        </>
 )}


 const mapStateToProps = (state: RootStateType) => ( {
     variantOfTournament: state.createTournament.variantOfTournament,
     tournament: state.createTournament.tournament
 })

const connector = connect(mapStateToProps, {setVariantOfTournament, setGroupsCount})
type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(CreatorContainer)
