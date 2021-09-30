import React, {Component} from "react";

class TimelineItem extends Component{
    render(){
        return(
            <li className="timeline-inverted">
                <div className="timeline-image"><img className="rounded-circle img-fluid" src={this.props.image} alt="..." /></div>
                <div className="timeline-panel">
                    <div className="timeline-heading">
                        <h4>{this.props.time}</h4>
                        <h4 className="subheading">{this.props.title}</h4>
                    </div>
                    <div className="timeline-body"><p className="text-muted">{this.props.body}</p></div>
                </div>
            </li>
        )
    }
}

export default TimelineItem;