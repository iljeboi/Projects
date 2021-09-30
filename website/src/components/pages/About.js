import React, {Component} from "react";

import Header from "../common/Header";
import Team from "../common/Team";
import Timeline from "../common/Timeline";

import about from "../assets/img/about.jpg"

class About extends Component{
    render(){
        return (
            <div>
                <Header 
                    title= "About Us"
                    subtitle= "It's a pretty great story"
                    showButton={false}
                    image={about}
                />
                <Timeline />
                <Team />
            </div>
        )
    }
}
export default About;