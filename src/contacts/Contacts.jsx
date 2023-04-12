import React from 'react';
import s from "./Contacts.module.css"
export const Contacts = () => {
    return (
        <div >
            <h3 >Contacts</h3>
            <form>
                <input type="text" name={"name"} placeholder={"Your name"}/>
                <input type="text" name={"email"} placeholder={"Your e-mail"}/>
                <textarea name="message" placeholder={"Your message"} ></textarea>
                <input type="submit" value={"Send"}/>
            </form>
        </div>
    );
};

