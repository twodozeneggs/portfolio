
import "./contact.scss";
import React, { useRef , useState } from "react";
import emailjs from "@emailjs/browser"

export default function Contact() {

  const form = useRef ();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_m8r33il', 'template_sostdf5', form.current, '5vEgdyyTtvZRMm3AJ')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
      
    };
    
    const[active, setActive] = useState(false);
      const handleClick = () => {
        setActive(!active);
      }
    
    return (
    <div className= "contact" id="contact">
      <div className="left">
        <img src="assets/confetti.png" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form ref={form} onSubmit={sendEmail}>
        <label className="Name">Name</label>
        <input type="text" name="user_name" />
        <label className="Email">Email</label>
        <input type="Email" name="user_email" />
        <label className="Message">Message</label>
        <textarea name="message" />
        <button onClick={handleClick} type="submit" value="Send">
        { active ? "Talk Soon!" : "Send"}
        </button>
        </form>
      </div>
    </div>
  )
}
