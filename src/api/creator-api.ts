import {ITeamSelect} from '../store/IStore'

export const getTeamsByLeague = (leagueId: number): Array<ITeamSelect>  => {
    let A: ITeamSelect[] = []
    for (let i=0; i<20; i++)
        A.push({id: i, name: `lig ${leagueId} Team${i}`, badge: null})
    return A
}