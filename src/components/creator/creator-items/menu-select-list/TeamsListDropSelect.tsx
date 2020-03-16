import * as React from 'react';

type TeamsListDropSelectType = {
    teamsListShow: boolean
    teams: Array<any>
    currentTeam: any
    setCurrentTeam: (type: 'league' | 'team', id:number) => void
    setListShow: (type: 'league' | 'team', value: boolean) => void
}

const TeamsListDropSelect: React.FC<TeamsListDropSelectType> = ({teamsListShow, teams, currentTeam, setCurrentTeam, setListShow}) => {
 return (

     <div className="btn-group blocks">
         <button type="button" className="btn btn-secondary">{currentTeam?.name || 'Select Team'}</button>
         <button type="button" className="btn btn-secondary dropdown-toggle dropdown-toggle-split"
                 data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                 onClick={()=>{setListShow('team', ! teamsListShow)}}
         >
             <span className="sr-only">Toggle Dropdown</span>
         </button>
         <ul className={"dropdown-menu" + ((teamsListShow) ? " show" : " ")}>

             {
                 teams.map( (team) => {
                     return <li key={team.id} className="dropdown-item"
                                onClick={setCurrentTeam.bind(null, 'team', team.id)}
                     >{team.name}</li>
                 })
             }

         </ul>
     </div>
 )
}

export default TeamsListDropSelect

