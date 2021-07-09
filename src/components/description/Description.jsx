import React, {useEffect, useRef} from 'react'
import "./description.scss"
import { init } from "ityped"

const Description = () => {
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
          showCursor: true,
          backDelay: 1500,
          backSpeed:60,
          strings: ["- I am your match!"],
        });
      }, []);
    return (
        <div id="description" className="description">
            <div className="content">
                <span className="black">- </span>
                <span className="blue">If you are finding a</span>
                <div className="black">&nbsp;&nbsp;software developer intern,</div>
            </div>
            <div className="content">
                {/* <span className="blue">- I am potentially</span> */}
                <span className="black"><span ref={textRef}></span></span>
                {/* <span className="black"> your match</span> */}
            </div>
            <button className="btn1"><a className="linkInBtn" href="#contact" alt="#" rel="noreferrer">Contact me now</a></button>      
        </div>
    )
}

export default Description
