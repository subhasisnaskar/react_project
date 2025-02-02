import React from 'react'


const Sectionheader = ({ title, subtitle }) => {
  return (
    <div className='section_header'>
      <h2><span>{title}</span></h2>
      <p>{subtitle}</p>
    </div>
  )
}

export default Sectionheader

