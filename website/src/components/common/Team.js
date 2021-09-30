import React, {Component} from "react";
import TeamItems from "./TeamItems";

import img1 from "../assets/img/team/1.jpg";
import img2 from "../assets/img/team/2.jpg";
import img3 from "../assets/img/team/3.jpg";

const teammates = [
    {name: "Parveen Anand", job: "Lead Designer", image: img1, twitter: "", facebook: "", linkedIn: ""},
    {name: "Diana Peterson", job: "Lead Marketer", image: img2, twitter: "", facebook: "", linkedIn: ""},
    {name: "Larry Parker", job: "Lead Developer", image: img3, twitter: "", facebook: "", linkedIn: ""},
];

class Team extends Component {
    render(){
        return(
            <section className="page-section bg-light" id="team">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                    <div className="row">
                        {teammates.map((item, index) => {
                                    return <TeamItems {...item} key={index} />
                                })}
                    </div>
                    <div className="row">
                        <div className="col-lg-8 mx-auto text-center"><p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p></div>
                    </div>
                </div>
            </section>
        )
    }
}
export default Team;