import React, { useState, useEffect } from 'react'
import "./contactComp.css"


function ContactComponent() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        console.log(firstName + lastName + email + description)
    });

    const thanks = (e) => {
        e.preventDefault()
        alert("Your email has been sent and will be answered ASAP! thanks " + firstName)
    }

    return (
        <div id="contactPage">
            <h1 id="contact">Contact Me</h1>
            <form id="formCard" onSubmit={thanks}>
                <div className="inputBorder">
                    <input className="inputEl" type="text" placeholder="First Name" name="firstName" value={firstName} onChange={(e) =>setFirstName(e.target.value)}></input>
                </div>
                <div className="inputBorder">
                    <input className="inputEl" type="text" placeholder="Last Name" name="lastName" value={lastName} onChange={(e) =>setLastName(e.target.value)}></input>
                </div>
                <div className="inputBorder">
                    <input className="inputEl" type="text" placeholder="Email" name="email" value={email} onChange={(e) =>setEmail(e.target.value)} ></input>
                </div>
                <textarea className="textEl" type="text" placeholder="Description" name="description" value={description} onChange={(e) =>setDescription(e.target.value)}></textarea>
                <button className="subBtn" type="submit" onSubmit={() => test}>Send</button>
            </form>
            <p id="privacy">All contact information is private and will never be displayed publicly</p>
        </div>
    )
}

export default ContactComponent
