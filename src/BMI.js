import React, { useState } from 'react'
import Box from './Box'
export default function BMI() { 
    const [metricChoice , setMetricChoice] = useState(true)
    const [bmi,setBmi] = useState(null)
    function checkData(e){
        e.preventDefault();
        // console.log("yes");
        if(metricChoice)
        {
            let metric = e.target.width.value / Math.pow(e.target.height.value, 2);
            metric = metric.toFixed(2);
            setBmi({bmi : metric})
            e.target.height.value = "";
            e.target.width.value = "";
        }else{
            let Imperial = (e.target.width.value / Math.pow(e.target.height.value, 2)) * 703; 
            Imperial = Imperial.toFixed(2);
            setBmi({bmi : Imperial })
            e.target.height.value = "";
            e.target.width.value = "";
        } 
    }

  return (
    <div>
      <div className="mt-5">
        <div className="row">
            <div className="col-12 col-lg-6 col-sm-4">
                <button className='btn btn-primary m-2' onClick={() => setMetricChoice(true)} disabled={metricChoice}>Metric</button>
                <button className='btn btn-primary m-2' onClick={() => setMetricChoice(false)} disabled={!metricChoice}>Imperial</button>
            </div>
        </div>
        <form onSubmit={checkData}>
            <h1>{metricChoice ? "Metric" : "Imperial"}</h1>
        <div className="mb-3">
            <label>Height</label>
            <input type="text" className="form-control w-50" name="height" />
        </div>
        <div className="mb-3">
            <label>Width</label>
            <input type="text" className="form-control w-50" name="width" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        </form>
       {/* {bmi ? console.log(bmi.bmi) : ""}  */}
       {bmi ? <Box bmi={bmi.bmi} /> : ""} 
        
      </div>
    </div>
  )
}
