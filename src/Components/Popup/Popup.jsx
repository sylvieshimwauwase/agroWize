import React from 'react' 
import "./Popup.css"

const Popup = ({text}) => {
  return (
    <div className='popup_container'>
       <div> 
        <img  className='cancelIcon' src='/cancelIcon.png' alt='cancel'/>
        </div>
        <div>
        <img className='successIcon' src='/loginSuccessIcon.png' alt='success'/>
        </div>
        <div>
        <h3 className='popUpText'>{text}</h3>
        </div>
    </div>
  )
}

export default Popup