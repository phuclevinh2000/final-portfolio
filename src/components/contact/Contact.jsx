import React, {useState} from 'react'

import "./contact.scss"
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import CallIcon from '@material-ui/icons/Call';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Contact = () => {
    const [message, setMessage] = useState(false);
    

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(!message);
      };

    const disapear = () => {
        setTimeout(() => {
            setMessage(!message);
        }, 3000);
    }

    
    return (
        <div id="contact" className="contact">
            <div className="left">
                <h1 className="title">
                    Contact me!
                </h1>
                <div className="info">
                    <MailOutlineIcon className="mailicon"/>
                    <p className="contactinfo"><a href="mailto:phuclevinh2000@gmail.com"> phuclevinh2000@gmail.com</a></p>
                </div>
                <div className="info">
                    <CallIcon className="mailicon"/>
                    <p className="contactinfo"><a href="tel:+358465407847"> +358 465 407 847</a></p>
                </div>
                <div className="info">
                    <LinkedInIcon className="mailicon"/>
                    <p className="contactinfo"><a target="_blank" rel="noreferrer" href="https:/www.linkedin.com/in/phuc-le-vinh-2000/"> https:/www.linkedin.com/in/phuc-le-vinh-2000/</a></p>
                </div>
            </div>
            <div className="right">
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Your name" />
                    <input type="text" placeholder="Your email" />
                    <input type="text" placeholder="Subject" />
                    <textarea placeholder="Leave me your message here"></textarea>
                    <button type="submit">Send</button>
                    {message && <span>Thanks for sending me a message{disapear()}</span>}
                    
                </form>
            </div>
        </div>
    )
}

export default Contact
