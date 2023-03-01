import React from 'react'
import './PrimaryButton.css'

function PrimaryButton(props) {
  return (
    <div className='btn-primary' onClick={props.onClick}>{props.text}</div>
  )
}

export default PrimaryButton