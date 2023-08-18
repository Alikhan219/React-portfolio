import React from "react";
import Common from "./Same";
import web from "./images/my2.png"
const Home =()=>{
    return(
        <>
       <Common name="Grow Your Business With"   imgsrc={web}
            visit="/service"
            btname="Get Started"
            />
        </>
    )
}

export default Home;