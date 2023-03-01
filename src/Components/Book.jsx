import React, { useState } from 'react'

const Book = (props) => {
  return (
    <div>
        <label htmlFor="weight">
            weight (KG)
            <input type="text" name="weight" id="weight" onChange={props.handleChange} placeholder="Please, provide weight" required />
        </label>
    </div>
  )
}

export default Book