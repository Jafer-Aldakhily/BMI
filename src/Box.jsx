import React from 'react'

export default function Box(props) {
  return (
    <div>
      
      <div className='bg-info text-white mt-5 p-5'>
        <div className='container'>
          <div className='row'>
            <h2>Your BMI is : {props.bmi ?? "empty"}</h2>
          </div>
          </div>
        
      </div>

    </div>
  )
}
