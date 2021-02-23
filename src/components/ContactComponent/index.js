import React from 'react'
import "./contactComp.css";
import emailjs from "emailjs-com";


function ContactComponent() {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_5zi8uuf', 'template_u0bc2yx', e.target, 'user_I9bocqPBOHKJVRBscJGav')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <div id="contactPage">
            <h1 id="contact">Contact Me</h1>
            <form id="formCard" onSubmit={sendEmail}>
                <div className="inputBorder">
                    <input className="inputEl" type="text" placeholder="First Name" name="firstName"></input>
                </div>
                <div className="inputBorder">
                    <input className="inputEl" type="text" placeholder="Last Name" name="lastName"></input>
                </div>
                <div className="inputBorder">
                    <input className="inputEl" type="text" placeholder="Email" name="email"></input>
                </div>
                <textarea className="textEl" type="text" placeholder="Description" name="description"></textarea>
                <button className="subBtn" type="submit">Send</button>
            </form>
            <p id="privacy">All contact information is private and will never be displayed publicly</p>
        </div>
    )
}

export default ContactComponent
