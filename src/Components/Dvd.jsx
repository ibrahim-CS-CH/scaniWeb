import React, { useState } from 'react'

const Dvd = (props) => {
  return (
    <div className=''>
        <label htmlFor="size" id="size">
            <span> size (MB)</span> 
            <input type="text" name="size" id="size" onChange={props.handleChange}  placeholder="Please, provide size" required />
            <p className='please'>Please, provide size in (MB)</p>
        </label>
    </div>
  )
}

export default Dvd