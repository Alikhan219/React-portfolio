import React from "react";
import Common from "./Same";
import web from "./images/Daco_4364523.png"
const About =()=>{
    return(
        <>
            <Common name="Welcom To About Page" imgsrc={web}
            visit="/contact"
            btname="Contact Now"
            />
        </>
    )
}

export default About;