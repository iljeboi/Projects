import React, {Component} from "react";
import TimelineItem from "./TimelineItem";

import img1 from "../assets/img/about/1.jpg";
import img2 from "../assets/img/about/2.jpg";
import img3 from "../assets/img/about/3.jpg";
import img4 from "../assets/img/about/4.jpg";


const timeline = [
    {time: "2009-2011", image: img1, title: "Our Humble Beginnings", body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!"},
    {time: "March 2011", image: img2, title: "An Agency is Born", body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!"},
    {time: "December 2015", image: img3, title: "Transition to Full Service", body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!"},
    {time: "July 2020", image: img4, title: "Phase Two Expansion", body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!"},
];

class Timeline extends Component{
    render(){
        return(
            <section className="page-section" id="about">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">About</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>

                    <ul className="timeline">
                        {timeline.map((item, index) => {
                            return <TimelineItem {...item} key={index} />
                        })}
                        <li className="timeline-inverted">
                            <div className="timeline-image">
                                <h4>
                                    Be Part
                                    <br />
                                    Of Our
                                    <br />
                                    Story!
                                </h4>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default Timeline;