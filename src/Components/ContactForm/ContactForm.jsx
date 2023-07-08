import React, { useState , useEffect } from "react";
import { IoIosSend } from "react-icons/io";
import { MdSend } from "react-icons/md";
import style from "./ContactForm.module.css";
function ContactForm() {
    let x = new Date().toLocaleString("en-US");
    console.log(x);

 
  const [form, setForm] = useState({time:x});

   
  useEffect(() => {
    const fetchMacID = async () => {
      try {
        const response = await fetch('https://api64.ipify.org?format=json');
        const data = await response.text();
        setForm({ ...form, mac: data });
        console.log("your mac id send to database " + data);
      } catch (error) {
        console.error('Error retrieving IP address:', error);
      }
    };
  
    fetchMacID();
    console.log(form)
  }, []);
  
  
    useEffect(() => {
      const fetchIPAddress = async () => {
        try {
          const response = await fetch('http://api.ipify.org');
          const ip = await response.text();
          setForm({ ...form, ip: ip });
          console.log("your IP address send to database " + ip);
        } catch (error) {
          console.error('Error retrieving IP address:', error);
        }
      };
    
      fetchIPAddress();
      console.log(form)
    }, []);


  async function handleForm() {
    await fetch("http://localhost:8080/data", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    });
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
            <span>{x}</span>
          </div>
        </div>
        <div className={style.message}>
          If you reached to the website end ! Leave a message about your
          experience or feedback
        </div>
        <form>
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            onChange={(e) => {
              setForm({ ...form, [e.target.name]: e.target.value });
            }}
          />
          <textarea
            name="message"
            placeholder="Enter Message Here"
            onChange={(e) => {
              setForm({ ...form, [e.target.name]: e.target.value });
            }}
          />
          {(form.message&&form.name)?<h2 onClick={handleForm}>
          <MdSend />
            Send
          </h2>:
          <h2
            onClick={()=>{alert('unable to send blank message')}}
          
          >
          <IoIosSend />
            Write
          </h2>
}
        </form>
      </div>
      {}
    </div>
  );
}
export default ContactForm;
