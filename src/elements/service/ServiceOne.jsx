import React, { Component } from "react";

const ServiceList = [
    {
        icon: '01',
        title: 'AI Digital Art & Graphic Design',
        description: 'Unleash creativity with our digital art and graphic design expertise.'
    },
    {
        icon: '02',
        title: 'Immersive 3D Solutions',
        description: 'Transform ideas into vivid realities with our advanced 3D visualization and rendering services.'
    },
    {
        icon: '03',
        title: 'Web Design & Mobile App Development',
        description: 'Craft seamless online experiences with our expert web design and mobile app development solutions.'
    },
]

class ServiceOne extends Component{
    render(){
        return(
            <React.Fragment>
                <div className="row">
                    {ServiceList.map( (val , i) => (
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                            <div className="service service__style--1">
                                <div className="icon">
                                    <img src={`/assets/images/icons/icon-${val.icon}.svg`} alt="Digital Agency"/>
                                </div>
                                <div className="content">
                                    <h4 className="title">{val.title}</h4>
                                    <p>{val.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </React.Fragment>
        )
    }
}
export default ServiceOne;