import React from "react";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img1 from "../assets/3.jpg"
import img2 from "../assets/4.jpg"

const Services = () => {
  return (
    <div className="services">
     
        <Carousel 
        infiniteLoop 
        autoPlay 
        showStatus={false} 
        showArrows={false}
        showThumbs={false}
        setInterval={1000} 
        >
            <div>
                <img src={img1} alt="item1"/>
                <p className="legend">Learn Web Development</p>
            </div>
            <div>
                <img src={img2} alt="item2"/>
                <p className="legend">Just Practising</p>
            </div>
        </Carousel>

    </div>
  )
}

export default Services;
