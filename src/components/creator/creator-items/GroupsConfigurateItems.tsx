import * as React from 'react';

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
    return (
        <div className='list-group-item align-items-xl-start'>
            <button>+</button>
            <span className='glyph-icon glyph icon-star'>{badge || <i>&nbsp; team is not selected!</i>}</span>
            <span className='text-white'>name</span>
        </div>
    )
}
