import "./topbar.scss";
import phucle from "../assets/logo.png"

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#home" className="logo">
            <img src={phucle} className="picture" alt="#home"/>
          </a>
          <div className="container">
            <div className="itemContainer">
              
              <span><a href="#home">Home</a></span>
            </div>
            <div className="itemContainer">
              
              <span><a href="#whatido">What I do</a></span>
            </div>
            <div className="itemContainer">
              
              <span><a href="#whyme">Why me?</a></span>
            </div>
            <div className="itemContainer">
              
              <span><a href="#portfolio">Portfolio</a></span>
            </div>
            <div className="itemContainer">
              
              <span><a href="#contact">Contact me</a></span>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
