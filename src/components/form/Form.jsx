import React, { useState } from 'react'
import './Form.css'
import PrimaryButton from '../buttons/PrimaryButton'


function Form(props) {

  return (
    <div className='form-wrapper' >
      <h1>{props.title}</h1> 
      {props.inputs.map((elem, index) => {
        return (
          <div key={elem.id} className='row'>
            <div className='col-form col-prop'>
              {/* {elem.text} */}
            </div>
            <div className='col-form col-input'>
              {elem.input()}
            </div>
          </div>
        )
      })}
    <PrimaryButton text={props.textButton} onClick={() => props.handleSubmit()} />
    <div className='result-message'>{props.resultMessage}</div>
  </div>
  )
}

export default Form