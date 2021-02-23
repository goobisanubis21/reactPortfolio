import React from 'react'
import "./contactComp.css";
import emailjs from "emailjs-com";


function ContactComponent() {

    function handleBtn() {
        let firstName = document.getElementById("firstName")
        let lastName = document.getElementById("lastName")
        let email = document.getElementById("email")
        let message = document.getElementById("description")
        const buttonn = document.getElementById("sendEmailBtn")
        
        if (firstName.value && lastName.value && email.value && message.value) {
            buttonn.disabled = false
        } else if ( firstName.value || lastName.value || email.value || message.value === null) {
            buttonn.disabled = true
        }
    }

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_5zi8uuf', 'template_u0bc2yx', e.target, 'user_I9bocqPBOHKJVRBscJGav')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset()
            setTimeout(() => {
                window.location.reload()
            }, 2000);
    }

    return (
        <div id="contactPage">
            <h1 id="contact">Contact Me</h1>
            <form id="formCard" onSubmit={sendEmail} onChange={handleBtn}>
                <div className="inputBorder">
                    <input className="inputEl" id="firstName" type="text" placeholder="First Name" name="firstName"></input>
                </div>
                <div className="inputBorder">
                    <input className="inputEl" id="lastName" type="text" placeholder="Last Name" name="lastName"></input>
                </div>
                <div className="inputBorder">
                    <input className="inputEl" id="email" type="text" placeholder="Email" name="email"></input>
                </div>
                <textarea className="textEl" id="description" type="text" placeholder="Description" name="description"></textarea>
                <button disabled className="subBtn" id="sendEmailBtn" type="submit">Send</button>
            </form>
            <p id="privacy">All contact information is private and will never be displayed publicly</p>
        </div>
    )
}

export default ContactComponent
