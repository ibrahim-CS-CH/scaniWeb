import React from 'react'
const Furniture = (props) => {    
  return (
    <div>
        <label htmlFor="height">
            height (CM)
            <input type="text" name="height" id="height"  onChange={props.handleChange}  placeholder="Please, provide height" required />
        </label>
        <label htmlFor="width">
            width (CM)
            <input type="text" name="width" id="width" onChange={props.handleChange}  placeholder="Please, provide width" required />
        </label>
        <label htmlFor="length">
            length (CM)
            <input type="text" name="length" id="length" onChange={props.handleChange}  placeholder="Please, provide length" required />
        </label>
    </div>
  )
}

export default Furniture