import * as React from 'react';
import {connect} from "react-redux";

import {RootStateType} from "../../store";
import TournamentVariantSelect from "../creator-elements/TournamenTypeSelect";
import {setVariantOfTournament} from "../../store/reducers/create-tournament-reducer";
import {ITournament, TournamentVariants} from "../../store/IStore";

type CreatorContainerProps = {
    variantOfTournament: TournamentVariants
    setVariantOfTournament: typeof setVariantOfTournament
    tournament: ITournament
}

const CreatorContainer: React.FC<CreatorContainerProps> = (props) => {

/* React.useEffect(()=> { },[])*/
    return(
        <>

            <TournamentVariantSelect tournamentVariantSelect={props.setVariantOfTournament}
                                     selectedVariant={props.variantOfTournament}/>
        </>
 )}


 const mapStateToProps = (state: RootStateType) => ( {
     variantOfTournament: state.createTournament.variantOfTournament,
     tournament: state.createTournament.tournament
 })

export default connect(mapStateToProps, {setVariantOfTournament})(CreatorContainer)