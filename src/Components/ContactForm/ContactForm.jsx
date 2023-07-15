import React, { useState, useEffect } from "react";
import { IoIosSend } from "react-icons/io";
import { MdSend } from "react-icons/md";
import style from "./ContactForm.module.css";
function ContactForm() {
  const [form, setForm] = useState({
    time: new Date().toLocaleString("en-US"),
  });

  useEffect(() => {
    const fetchIPAddress = async () => {
      try {
        const response = await fetch("http://api.ipify.org");
        const ip = await response.text();
        setForm({ ...form, ip: ip });
        console.log("your IP address send to database " + ip);
      } catch (error) {
        console.error("Error retrieving IP address:", error);
      }
    };

    fetchIPAddress();
    
  }, []);

  useEffect(() => {
    const fetchMacID = async () => {
      try {
        const response = await fetch("https://api64.ipify.org?format=json");
        const data = await response.text();
        setForm({ ...form, mac: data });
        console.log("your mac id send to database " + data);
      } catch (error) {
        console.error("Error retrieving IP address:", error);
      }
    };

    fetchMacID();
  }, []);

  async function handleForm(e) {
    e.preventDefault()
    await fetch("https://portfolio-backend-6mgc.onrender.com/data", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    });
  
    console.log(form)
   setForm({ ...form, name: "", message: "" });
  }

  return (
    <div className={style.wrapper}>

      <div className={style.card}>
        <div className={style.heading}>
          <img
            src="https://avatars.githubusercontent.com/u/120270750?v=4"
            alt="myImage"
          />
          <div>
            {" "}
            <p> Rohan Kumar</p>
            <span>{form.time}</span>
          </div>
        </div>
        <div className={style.message}>
          If you reached to the website end ! Leave a message about your
          experience or feedback
        </div>
        <div  className={style.form} id="formm">
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            onChange={(e) => {
              setForm({ ...form, [e.target.name]: e.target.value });
            }}
            value={form.name}
          />
          <textarea
            name="message"
            placeholder="Enter Message Here"
            onChange={(e) => {
              setForm({ ...form, [e.target.name]: e.target.value });
            }}
            value={form.message}
            />
          {form.message && form.name ? (
           <a href="#form">
            <button className={style.sendButton} onClick={handleForm}> <MdSend />Send</button> 
           </a>
          
            
          ) : (
            <a href="#form">
            <button className={style.sendButton}  onClick={() => {
              alert("unable to send blank message");
            }}> <IoIosSend />Write</button> 
                   </a>
          )}
        </div>
      </div>
      {}
    </div>
  );
}
export default ContactForm;
