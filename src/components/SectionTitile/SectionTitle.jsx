import React from 'react'
import "./SectionTitle.scss";

const SectionTitle = ({titleText, subTitleText}) => {
  return (
    <>
    <div className="section_title">
        <h2>{titleText}</h2>
        <p>{subTitleText}</p>
    </div>
    </>
  )
}

export default SectionTitle