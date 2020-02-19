import * as React from 'react';

import s from './Button.module.css'

export type ButtonType = {
    children: React.ReactNode
    isSelected: boolean
    isDark?: boolean
    type?: any
    onClick?: (e: React.MouseEvent) => void
}

const Button = ({children, onClick, isSelected, type = "submit", isDark=false}: ButtonType)  => {

  let buttonStyle =  (isSelected) ? s.button_selected : s.button_empty

  if (isDark && !isSelected) buttonStyle += " " + s.button_empty__dark


  return (
      <button className={s.button + " " + buttonStyle}  onClick={onClick} type={type} >
          {children}
      </button>
  )
}

export default Button;
