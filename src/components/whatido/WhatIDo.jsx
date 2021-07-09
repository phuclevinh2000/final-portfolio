import React from 'react'
import "./whatido.scss"
// import background1 from "../assets/leftbackground.png"
// import background2 from "../assets/rightbackground.png"
import embeddedicon from "../assets/icon/iconembedded.png"
import codeicon from "../assets/icon/iconcoder.png"

const WhatIDo = () => {
    return (
        <div className="whatido" id="whatido" >
            <div className="wrapper">
                <div className="title"><h1>What I do</h1></div>
                <div className="container">
                    <div className="left">
                        <h1><img src={codeicon} className="icon" alt="#"/>Web development</h1>
                        <p>I am fresh to web development but I am totally impressed at how it works and the way my code can upgrade UI and UX of a scratch website. I am polishing my professional skills day by day with an ambitious to be a full stack developer.</p>
                    </div>
                    <div className="right">
                        <h1><img src={embeddedicon} className="icon" alt="#"/>Embedded system</h1>
                        <p>With the minor of embedded system, I am familiar with reading the datasheet, make PCB, working with several microcontrollers, especially STM32.</p>
                    </div>
                </div>
                <button className="btn1"><a className="linkInBtn" href="#whyme" alt="#" rel="noreferrer">Explore my skills</a></button>
            </div>
        </div>
    )
}

export default WhatIDo
