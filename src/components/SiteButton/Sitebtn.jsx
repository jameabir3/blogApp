import React from 'react'
import { Link } from 'react-router-dom'
import "./Sitebtn.scss";

const Sitebtn = ({btnText, btLink}) => {
  return (
    <>
        <Link to={btLink} className='site_btn'>{btnText}</Link>
    </>
  )
}

export default Sitebtn