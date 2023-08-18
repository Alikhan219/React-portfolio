import React, { useState } from "react";

const About =()=>{
  const [data, setData]= useState({
    fullname:'',
    phone:'',
    email:'',
    message:''
  })

const inputEvent=(event)=>{
 const {name,value} = event.target;
setData((preVal)=>{
    return{...preVal, [name]:value}
})
}

const onSub=(e)=>{
e.preventDefault();
alert(`My Name Is ${data.fullname}. My Phone Number Is ${data.phone}. My Email Is ${data.email}. And Here Is What I Want To Say ${data.message}`)
}

    return(
        <>
           <div className="my-5">
<h1 className="text-center">
    Contact Us
</h1>
           </div>
           <div className="container contact_div">
   <div className="row">
 <div className="col-md-6 col-10 mx-auto">
<form onSubmit={onSub}>
<div class="form-group">
    <label for="exampleFormControlInput1">Full Name:</label>
    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter Your Full Name..."
      name="fullname"
      value={data.fullname}
      onChange={inputEvent}

     />
  </div>
<div class="form-group">
    <label for="exampleFormControlInput1">Phone:</label>
    <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Mobile Number" 
      name="phone"
      value={data.phone}
      onChange={inputEvent}

     />
  </div>
<div class="form-group">
    <label for="exampleFormControlInput1">Email address:</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"
      name="email"
      value={data.email}
      onChange={inputEvent}
     />
  </div>
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Message:</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" 
      name="message"
      value={data.message}
      onChange={inputEvent}
      ></textarea>
  </div>
  <button class="btn btn-outline-primary mt-3 mys-btn" type="submit">Submit form</button>
</form>
 </div>
   </div>
           </div>
        </>
    )
}

export default About;