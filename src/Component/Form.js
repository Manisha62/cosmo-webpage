import "./Form.css";
import React from "react";


const Form = () => {
  return (
    
    <div className="form">
        <form>
            <label>Your Name:</label>
            <input type="text"></input><br></br>

            <label>E-mail:</label>
            <input type="email"></input><br></br>

            <label>Contact:</label>
            <input type="number"></input><br></br>

            <label>Address:</label>
            <input type="text"></input><br></br>
            <button className="btn">Submit</button>
            
        </form>

    </div>
  )
}

export default Form
