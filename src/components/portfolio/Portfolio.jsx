import React from 'react'
import "./portfolio.scss"
import calculate from "../assets/portfolio/calculator.PNG"
import customer from "../assets/portfolio/customer.png"
import weatherapp from "../assets/portfolio/weather.png"
import recipe from "../assets/portfolio/recipe.png"
import bootstrap from "../assets/portfolio/bootstrap5.png"

const Portfolio = () => {
    return (
        <div id="portfolio" className="portfolio">
            <h1 className="title">My lastest works</h1>
            <div className="container">
                <div className="code">
                    <div className="box">
                        <img src={customer} alt="#" />
                        <p className="usedtitle">Fetch customer data</p>
                        <div className="used">
                            <p>Styled Components</p>
                            <p>React</p>
                        </div>
                        <div className="used1">
                            <p>Fetch API</p>
                            <p>ReactRoute</p>
                        </div>
                    </div>
                    <button className="btn1"><a className="linkInBtn" href="https://customer-list-react.herokuapp.com/" alt="#" target="_blank" rel="noreferrer">Live demo</a></button>
                    <button className="btn2"><a className="linkInBtn" href="https://github.com/phuclevinh2000/customer-employee-react" alt="#" target="_blank" rel="noreferrer">Source code</a></button>
                </div>
                <div className="code">
                    <div className="box">
                        <img src={calculate} alt="#" />
                        <p className="usedtitle">Simple calculator</p>
                        <div className="used">
                            <p>React</p>
                            <p>Styled Components</p>
                        </div>
                        <div className="used1">
                            <p>FlexBox</p>
                        </div>
                    </div>
                    <button className="btn1"><a className="linkInBtn" href="https://simple-calculator-phucle.herokuapp.com/" alt="#" target="_blank" rel="noreferrer">Live demo</a></button>
                    <button className="btn2"><a className="linkInBtn" href="https://github.com/phuclevinh2000/calculator-react" alt="#" target="_blank" rel="noreferrer">Source code</a></button>
                </div>
                <div className="code">
                    <div className="box">
                        <img src={weatherapp} alt="#" />
                        <p className="usedtitle">Weather tracking</p>
                        <div className="used">
                            <p>React</p>
                            <p>Styled Components</p>
                        </div>
                        <div className="used1">
                            <p>Fetch API</p>
                        </div>
                    </div>
                    <button className="btn1"><a className="linkInBtn" href="https://weather-app-phucle.herokuapp.com/" alt="#" target="_blank" rel="noreferrer">Live demo</a></button>
                    <button className="btn2"><a className="linkInBtn" href="https://github.com/phuclevinh2000/weather-app" alt="#" target="_blank" rel="noreferrer">Source code</a></button>
                </div>
                <div className="code">
                    <div className="box">
                        <img src={recipe} alt="#" />
                        <p className="usedtitle">Recipe app</p>
                        <div className="used">
                            <p>React</p>
                            <p>Fetch API</p>
                        </div>
                        <div className="used1">
                            <p>CSS</p>
                        </div>
                    </div>
                    <button className="btn1"><a className="linkInBtn" href="https://recipe-search-phucle.herokuapp.com/" alt="#" target="_blank" rel="noreferrer">Live demo</a></button>
                    <button className="btn2"><a className="linkInBtn" href="https://github.com/phuclevinh2000/Recipe-app" alt="#" target="_blank" rel="noreferrer">Source code</a></button>
                </div>
                <div className="code">
                    <div className="box">
                        <img src={bootstrap} alt="#" />
                        <p className="usedtitle">Bootstrap Portfolio</p>
                        <div className="used">
                            <p>Bootstrap 5</p>
                            <p>CSS</p>
                        </div>
                        <div className="used1">
                            <p>Html</p>
                        </div>
                    </div>
                    <button className="btn1"><a className="linkInBtn" href="https://phucle-portfolio.netlify.app/" alt="#" target="_blank" rel="noreferrer">Live demo</a></button>
                    <button className="btn2"><a className="linkInBtn" href="https://github.com/phuclevinh2000/phucle-portfolio-bootstrap-5" alt="#" target="_blank" rel="noreferrer">Source code</a></button>
                </div>
            </div>
        </div>
    )
}

export default Portfolio
