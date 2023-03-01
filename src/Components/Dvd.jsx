import React, { useState } from 'react'

const Dvd = (props) => {
  return (
    <div className=''>
        <label htmlFor="size">
            Size (MB)
            <input type="text" name="size" id="size" onChange={props.handleChange}  placeholder="Please, provide size" required />
        </label>
    </div>
  )
}

export default Dvd