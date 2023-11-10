import React from "react"
 

function Form() {
    return(
    <div className="text-center container">
        <h3>REGISTRATION FORM IN REACT</h3>
        <form className="mx-2">
            <input type="text" name="Name" id="Name" value="" placeholder="Enter Name..." className="form-control" />
        </form>
    </div>
   )  
}
export default Form;
