import * as React from 'react';

import s from './Button.module.css'

export type ButtonType = {
    children: React.ReactNode
    isSelected: boolean
    onClick: (e: React.MouseEvent) => void
}

const Button = ({children, onClick, isSelected}: ButtonType)  => {

  let buttonStyle =  (isSelected) ? s.button_selected : s.button_empty

  return (
      <button className={s.button + " " + buttonStyle}  onClick={onClick}  >
          {children}
      </button>
  )
}

export default Button;
