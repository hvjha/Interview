import React, { useState } from "react";
import Form1 from "./Form1";

const Form = () => {
  const [formDta, setFormDta] = useState({ name: "", password: "" });
  const[submittedData,setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormDta({
      ...formDta,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formDta)
    setFormDta({name:"",password:""})
    console.log(formDta);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Register Form</h1>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formDta.name}
            onChange={handleChange}
            placeholder="Enter your Name"
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formDta.password}
            onChange={handleChange}
            placeholder="Enter Your Password"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {submittedData && (
        <div>
          <h2>Submitted Data:</h2>
          <p>Name:{submittedData.name}</p>
          <p>Password:{submittedData.password}</p>
        </div>
      )}
      <Form1/>
    </div>
  );
};

export default Form;
