import React from 'react'

const Input = (props) => {
  return (
    <div className="input-group mt-4">
        <input
          value={props.country}
          onChange={props.onChange}
          type="text"
          className="form-control"
          placeholder="Enter country"
        />
        <button
        onClick={props.onClick}
         className="btn btn-dark "
          type="button">
          Search
        </button>
      </div>
  )
}

export default Input