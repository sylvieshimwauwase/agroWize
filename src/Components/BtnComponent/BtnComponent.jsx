import React from 'react'
import "./BtnComponent.css"

const BtnComponent = ({variant = "primary", size = "large", fullWidth = false, children }) => {
    return (
 <button
      data-fullwidth={fullWidth.toString()}
      data-size={size}
      data-variant={variant}
      className={`btn ${variant}`}
    >
      {children}
    </button>
  )
}

export default BtnComponent


