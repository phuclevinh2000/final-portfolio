import React from 'react'
import "./whyme.scss"
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const WhyMe = () => {
    return (
        <div className="whyme" id="whyme">
            <div className="left">
                <div className="title">
                    <h1>Why me?</h1>
                </div>
                <div className="box">
                    <p className="line1">I am a fast learner with to-do attitude. I love spending hours to build quality websites and enhancing my coding skills through personal projects. </p>
                    <p className="line2">I am eager to gain hands-on experience in web developing at a dynamic working place.</p>
                    <hr />
                </div>
            </div>
            <div className="right">
                <div className="title">
                    <h1>Professional Skills</h1>
                </div>
                <div className="box">
                    <div className="row1">
                        <p>HTML</p>
                        <p>CSS</p>
                        <p>JavaScript</p>
                        <p>C</p>
                        <p>C++</p>
                    </div>
                    <div className="row2">
                        <p>Styled Component</p>
                        <p>Bootstrap</p>
                        <p>React</p>
                    </div>
                    <div className="row3">
                        <p>Visual Studio</p>
                        <p>SASS</p>
                        <p>FlexBox</p>
                    </div>
                    <hr />
                    <button className="btn1"><a className="linkInBtn" href="#portfolio" alt="#" rel="noreferrer">Explore my works</a></button>
                </div>
                <div className="img-container">
                    <a className="linkInBtn1" href="https://github.com/phuclevinh2000" alt="#" target="_blank" rel="noreferrer"><GitHubIcon className="github"/></a>
                    <a className="linkInBtn2" href="https://www.linkedin.com/in/phuc-le-vinh-2000/" alt="#" target="_blank" rel="noreferrer"><LinkedInIcon className="linkein"/></a>
                </div>
            </div>
        </div>
    )
}

export default WhyMe
