export interface ITeam {
    name: string;
    badge: string | null
}

export interface IGroup {
    groupId: number;
    teamsCount: number;
    teamsGoToPlayOff: number;
    teams: Array<ITeam | null>
}

export interface ITournament {
    name: string;
    groupsCount: number;
    teamsCount: number;
    playOffCount: number;
    homeAway: boolean;
    groups: Array<IGroup>
}

export interface ICreateTournamentState {
    variantOfTournament: TournamentVariants,
    tournament: ITournament
}

export enum TournamentVariants  { PO, PO_GR, LIG }

export interface IAuth {
    isAuth: boolean
    login: string
    myId: number | null
    isInitialize: boolean
}

//interfaces for team select
//---------------------------
export interface ITeamSelect {
    id: number
    name: string
    badge: string | null
}

export interface ILeagueSelect {
    id: number
    name: string
    country?: string | null
    badge?: string | null
}

export interface ITeamSelectState {
    topSix: Array<ILeagueSelect>
    teams: Array<ITeamSelect> | null
    currentLeagueId: number | null
    currentTeamId: number | null
    leagues: Array<ILeagueSelect>
}
