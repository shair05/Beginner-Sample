import React from "react";
/*import ReactDOM from 'react-dom/client';*/
import { useState } from 'react';
 

function Form() {

    //To handle inputs values through an empty object
    const [inputs, setInputs] = useState({});
   
   //Setting Input field value and storing in an object as inputs
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))//do not understand
      }

    const handleSubmit = (event) => {
        event.preventDefault();
        //to convert object to array --> const myArray = Object.values(inputs);
        alert(inputs);
      }

    return(
    <div className="text-center container w-50">
        <h3>FORM ELEMENTS IN REACT</h3>
        
        <form onSubmit={handleSubmit} className="mx-2 d-grid gap-3">
            <div className="">
                <div className="text-start">
                    <label className="mb-0" for="FullName"><b><span style={{color:'red'}}>*</span>Full Name</b></label>
                    <input type="text" className="form-control" name="FullName" id="FullName" value={inputs.FullName || ""} onChange={handleChange} placeholder="Enter Name..." />
                </div>
            </div> 

            <div className="">
                {/*<div className="d-inline me-2">
                    <button className="btn btn-primary" type="reset" name="Reset" id="Reset">Reset</button>
                   </div>*/}
                <div className="d-inline">
                    <button className="w-100 btn btn-success" type="submit" name="Submit" id="Submit">Submit</button> 
                </div>
            </div>

        </form>
    </div>
   )  
}
export default Form;
