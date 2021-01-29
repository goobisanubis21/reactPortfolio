import React from 'react'
import "./contactComp.css"

function ContactComponent() {
    return (
        <div id="contactPage">
            <h1 id="contact">Contact Me</h1>
            <form id="formCard">
                <div className="inputBorder">
                    <input className="inputEl" type="text" placeholder="First Name"></input>
                </div>
                <div className="inputBorder">
                    <input className="inputEl" type="text" placeholder="Last Name"></input>
                </div>
                <div className="inputBorder">
                    <input className="inputEl" type="text" placeholder="Email"></input>
                </div>
                <textarea className="textEl" type="text" placeholder="Description"></textarea>
                <button className="subBtn" type="submit">Send</button>
            </form>
            <p id="privacy">All contact information is private and will never be displayed publicly</p>
        </div>
    )
}

export default ContactComponent
