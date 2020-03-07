import * as React from 'react';
import {connect} from "react-redux";

import {RootStateType} from "../../store";
import TournamentVariantSelect from "../creator-elements/TournamenTypeSelect";
import {setGroupsCount, setVariantOfTournament} from "../../store/reducers/create-tournament/create-tournament-reducer";
import {ITournament, TournamentVariants} from "../../store/IStore";
import Button from "../instruments/Button/Button";
import Header from "../header/Header";

import GroupsConfigure from './GroupsConfigurate'

//example loading spinner
/*
<div className="spinner-border text-success" role="status">
                <span className="sr-only">Loading...</span>
            </div>
 */


type CreatorContainerProps = {
    variantOfTournament: TournamentVariants
    setVariantOfTournament: typeof setVariantOfTournament
    tournament: ITournament
    setGroupsCount: typeof setGroupsCount
}

const CreatorContainer: React.FC<CreatorContainerProps> = (props) => {

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

export default connect(mapStateToProps, {setVariantOfTournament, setGroupsCount})(CreatorContainer)