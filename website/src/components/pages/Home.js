import React, { Component } from "react";
import Header from "../common/Header";
import img from "../assets/img/header-bg.jpg";
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
            </div>
        )
    }
}
export default Home;