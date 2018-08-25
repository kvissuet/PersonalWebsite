import React from "react";
import {Image} from "react-bootstrap";

import Me from "../../assets/images/image.jpeg";
import Odin from "../../assets/images/OdinAndFreya.png";
import "../../css/Homepage.css"

export default class Homepage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            key:"Home"
        }
    }

    render() {
        return(
            <div>
                <div className="Homepage-top">
                    <div>
                        <Image src={Me} rounded style={{width:200, height:200}}/>
                    </div>

                    <div>
                        <p style={{textAlign:"left"}}> I am currently a Mathematics PhD candidate at the University of Illinois at Chicago.
                        My interests are in Number Theory and Arithmetic Geometry. I recently spent the summer interning
                        at Intuit where I worked as a Data Scientist and Full Stack Engineer.</p>
                    </div>
                </div>

                <div className="Homepage-top-reverse">


                    <div>
                        <h2> Odin and Freya </h2>
                        <p> These are the best two dogs in the world.</p>
                    </div>

                    <div>
                        <Image src={Odin} rounded style={{width:200, height:200}}/>
                    </div>
                </div>
            </div>
        )
    }

}