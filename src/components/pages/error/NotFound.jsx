import React from "react"
import { Link } from 'react-router-dom'
import PrimaryButton from "../../buttons/PrimaryButton"

const NotFound = () => {
    return (
      <div className='not-found'>
        <h1 className="code-404">404</h1>
        <h3>Parece que te has perdido...</h3>
        <Link className='r-link' to='/home'>
          <PrimaryButton text='Volver' />
        </Link>
      </div>
    )
  }

  export default NotFound