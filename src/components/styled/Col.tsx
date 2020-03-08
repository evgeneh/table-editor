import * as React from 'react';


export type ColType = {
    children: React.ReactNode
    col: 'col__fr' | 'col__auto_fr' | 'col__fr3' | 'col__fr2_fr1' | 'col__fr2'
}

const Col = ({children, col}: ColType)  => {

  return (
      <div className={"col " + col}>

          {children}

      </div>
  )
}

export default Col;
