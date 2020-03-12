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
}

