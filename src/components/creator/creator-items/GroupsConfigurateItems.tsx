import * as React from 'react';
import pen from 'bootstrap-icons/icons/pen.svg'
import plus from 'bootstrap-icons/icons/plus.svg'
import cog from 'bootstrap-icons/icons/gear.svg'

import MenuTeamSelect from './MenuItemSelect'
import styled from "styled-components";

const GroupName = styled.span`
    margi: auto 0;
    color: white;
    font-weight: 500;
`;

type CreateTableBadgeHType = {
    groupName: string
    //setSettingsShow: () => void
}
export const CreateTableBadgeHeader: React.FC<CreateTableBadgeHType> = ({groupName}) => {
    return (

        <div className='list-group-item-active bg-success rounded-top'>
            <span className='glyphicon glyph icon-star'></span>
            <GroupName>{groupName}</GroupName>
            <button className="btn btn-success btn-xs" >
                <img src={cog} alt="" width="28" height="28" title="Bootstrap"/>
            </button>
        </div>

    )
}


type CreateTableBadgeItemType = {
    groupId: number
    teamPos: number
    badge: string | null,
    name: string | null
}
export const CreateTableBadgeItem: React.FC<CreateTableBadgeItemType> = ({badge, name, groupId, teamPos}) => {
    const [isSelectorShow, showSelector] = React.useState<boolean>(false)
    const [isSettingsShow, setSettingsShow] = React.useState<boolean>(false)

    return (
        <>

            <div className='list-group-item align-items-xl-start'>
                {isSelectorShow && <MenuTeamSelect closeMenu={showSelector}
                                                   groupId={groupId}
                                                   teamPos={teamPos}
                />}
                <button className="btn btn-outline-light rounded-circle"
                        onClick={()=>{showSelector(true)}}
                >
                    <img src={plus} alt="" width="30" height="32" title="Bootstrap"/>
                </button>
                <button className="btn btn-outline-light rounded-circle" >
                    <img src={pen} alt="" width="30" height="32" title="Bootstrap"/>
                </button>
                <span className='glyph-icon glyph icon-star'>{name || <i>&nbsp; team is not selected!</i>}</span>
                <span className='text-white'>name</span>
            </div>
        </>
    )
}
