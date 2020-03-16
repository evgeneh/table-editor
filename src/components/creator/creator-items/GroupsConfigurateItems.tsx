import * as React from 'react';
import pen from 'bootstrap-icons/icons/pen.svg'
import plus from 'bootstrap-icons/icons/plus.svg'

import MenuTeamSelect from './MenuItemSelect'

type CreateTableBadgeHType = {
    groupName: string
}
export const CreateTableBadgeHeader: React.FC<CreateTableBadgeHType> = ({groupName}) => {
    return (

        <div className='list-group-item-active bg-success rounded-top'>
            <span className='glyphicon glyph icon-star'></span>
            <span className='text-white '>{groupName}</span>
        </div>

    )
}


type CreateTableBadgeItemType = {
    badge: string | null,
    name: string | null
}
export const CreateTableBadgeItem: React.FC<CreateTableBadgeItemType> = ({badge, name}) => {
    const [isSelectorShow, showSelector] = React.useState<boolean>(false)

    return (
        <>

            <div className='list-group-item align-items-xl-start'>
                {isSelectorShow && <MenuTeamSelect closeMenu={showSelector}/>}
                <button className="btn btn-outline-light rounded-circle"
                        onClick={()=>{showSelector(true)}}
                >
                    <img src={plus} alt="" width="30" height="32" title="Bootstrap"/>
                </button>
                <button className="btn btn-outline-light rounded-circle" >
                    <img src={pen} alt="" width="30" height="32" title="Bootstrap"/>
                </button>
                <span className='glyph-icon glyph icon-star'>{badge || <i>&nbsp; team is not selected!</i>}</span>
                <span className='text-white'>name</span>
            </div>
        </>
    )
}
