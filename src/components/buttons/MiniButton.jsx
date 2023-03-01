import React from 'react'
import './MiniButton.css'

function MiniButton(props) {
  return (
    <div className='btn-mini'>
        <img src={props.imgSource} className="img-mini" alt="mini" />
    </div>
  )
}

export default MiniButton