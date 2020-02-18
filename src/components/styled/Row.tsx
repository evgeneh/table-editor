import * as React from 'react';

export interface JustChild {
    children: React.ReactNode
}

const divStyle = {
    display: 'grid',
    justifyContent: 'center',
}

const Row = ({children}: JustChild)  => {

  return (
      <div style={divStyle}>

          {children}

      </div>
  )
}

export default Row;
