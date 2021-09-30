import React, {Component} from "react";
import ClientsItem from "./ClientsItem";

import img1 from "../assets/img/logos/microsoft.svg";
import img2 from "../assets/img/logos/google.svg";
import img3 from "../assets/img/logos/facebook.svg";
import img4 from "../assets/img/logos/ibm.svg";

const clients = [
    {title: "Microsoft", image: img1},
    {title: "Google", image: img2},
    {title: "Facebook", image: img3},
    {title: "IBM", image: img4},
];


class Clients extends Component{
    render(){
        return(
            <div class="py-5">
                <div class="container">
                    <div class="row align-items-center">
                        {clients.map((item, index) => {
                                return <ClientsItem {...item} key={index} />
                            })}
                    </div>
                </div>
            </div>
        )
    }
}

export default Clients;