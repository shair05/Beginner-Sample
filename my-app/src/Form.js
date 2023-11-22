import React from "react";
/*import ReactDOM from 'react-dom/client';*/
import { useState } from 'react';
 

function Form() {

    //To handle inputs
    const [inputs, setInputs] = useState({});
   
   //Setting Input field value
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))//do not understand
      }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(inputs);
      }

    return(
    <div className="text-center container w-50">
        <h3>FORM ELEMENTS IN REACT</h3>
        
        <form onSubmit={handleSubmit} className="mx-2">
            <div className="form-row">
                <div className="form-group col text-start">
                    <label className="mb-0" for="FullName"><b><span style={{color:'red'}}>*</span>Full Name</b></label>
                    <input type="text" className="form-control" name="FullName" id="FullName" value={inputs.FullName || ""} onChange={handleChange} placeholder="Enter Name..." />
                </div>
            </div>   
        </form>
    </div>
   )  
}
export default Form;
