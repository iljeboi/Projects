import React, { Component } from "react";
import Header from "../common/Header";
import img from "../assets/img/header-bg.jpg";

import Services from "../common/Services";
import Portfolio from "../common/Portfolio";
import Clients from "../common/Clients";
import Team from "../common/Team";
import Timeline from "../common/Timeline";

class Home extends Component{

    render(){
        return(
            <div>
                <Header 
                    title= "Welcome to Our Studio"
                    subtitle= "IT'S NICE TO MEET YOU"
                    buttonText="TELL ME MORE"
                    link="/services"
                    showButton={true}
                    image={img}
                />
                <Services />
                <Portfolio />
                <Clients />
                <Timeline />
                <Team />
            </div>
        )
    }
}
export default Home;