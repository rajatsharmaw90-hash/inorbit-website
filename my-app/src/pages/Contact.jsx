import React, { useState } from "react";
import Footer from "../components/footer";
import { Navigate, useNavigate } from "react-router-dom";

function Contact() {
  const [formData, setFormData] = useState({
    first: "",
    last: "",
    email: "",
    mobile: "",
    enquiry: ""
  });
  const navigate = useNavigate();

  function handleChange(event) {
    const {name, value} = event.target;

    setFormData({
      ...formData,
      [name]: value
    })
  }

  async function handleSubmit(event) {
    event.preventDefault(); // 🚨 stop page reload

    console.log(formData)

    try {
      const response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log(data);

      if(response.ok){
        alert("Form Submitted Successfully")

       navigate("/")
      }else{
        alert("error saving data!")
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="container" id="contact-container">
        <div className="row" id="inner-contact">
          <h1>Contact Us</h1>
          <div className="col-lg-6">
            <label htmlFor="">First Name *</label>
            <input
              type="text"
              name="first"
              id=""
              placeholder="First Name"
              onChange={handleChange}
              required
            />
          </div>

           <div className="col-lg-6">
            <label htmlFor="">Last Name *</label>
            <input
              type="text"
              name="last"
              id=""
              placeholder="Last Name"
              onChange={handleChange}
              required
            />
          </div>

           <div className="col-lg-6">
            <label htmlFor="">Email *</label>
            <input
              type="email"
              name="email"
              id=""
              placeholder="Email"
              onChange={handleChange}
              required
            />
          </div>

           <div className="col-lg-6">
            <label htmlFor="">Mobile *</label>
            <input
              type="number"
              name="mobile"
              id=""
              placeholder="Mobile"
              onChange={handleChange}
              required
            />
          </div>
           <div className="col-12">
            <label htmlFor="">Message *</label>
          <textarea name="enquiry" id="" placeholder="Message" onChange={handleChange} required></textarea>
           </div>
          <button type="submit" id="contact-button">Submit</button>
        </div>
      </div>

      <Footer />
    </form>
    

  );
}

export default Contact;
