import React, {Component} from "react";

class ClientsItem extends Component{
    render(){
        return(
            <div className="col-md-3 col-sm-6 my-3">
                <a href="#!"><img className="img-fluid img-brand d-block mx-auto" src={this.props.image} alt={this.props.title} /></a>
            </div>
        )
    }
}
export default ClientsItem;