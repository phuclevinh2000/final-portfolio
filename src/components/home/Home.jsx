import React from 'react'
import "./home.scss"
import phucleprofile from "../assets/profilepic.png"
import cv from "../assets/CV.pdf"

const Home = () => {
    return (
        <div className="home" id="home">
            <div className="left">
                <div className="wrapper">
                    <h1 className="firstLine">Hello,</h1>
                    <h1 className="secondLine">I'm Phuc Le</h1>
                    <h1 className="thirdLine">Fresher Developer</h1>
                    <p className="fourthLine">Enthusiastic senior information technology student and ambitious to be a full-stack developer after graduating.</p>
                    <div className="button">
                        <button className="btn1"><a className="linkInBtn" href="#whatido" alt="#" rel="noreferrer">Hire me</a></button>
                        <button className="btn2"><a className="linkInBtn" href={cv} alt="#" target="_blank" rel="noreferrer">See my CV</a></button>
                    </div>
                </div>
            </div>
            <div className="right">
                <div className="imgContainer">
                    <img src={phucleprofile} className="picture" alt="#"/>
                </div>
            </div>
        </div>
    )
}

export default Home
