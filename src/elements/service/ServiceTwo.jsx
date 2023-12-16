import React, { Component } from "react";
import { AiIcon } from "./icons/AiIcon";
import { ThreeDIcon } from "./icons/ThreeDIcon";
import { UxIcon } from "./icons/UxIcon";
import { BrandIcon } from "./icons/BrandIcon";
import "./service.scss"

const ServiceList = [
    {
        icon: <AiIcon />,
        title: 'AI Digital Art & Graphic Design',
        description: 'Unleash the power of AI in our digital art and graphic design services. Elevate your brand with cutting-edge visuals that seamlessly blend technology and creativity.'
    },
    {
        icon: <ThreeDIcon />,
        title: 'Immersive 3D Solutions',
        description: 'Explore limitless possibilities with our 3D Visualization & Rendering. From animated concepts to industrial-scale product design, we bring ideas to life with stunning visuals and precision.'
    },
    {
        icon: <UxIcon />,
        title: 'Web Design & Mobile App',
        description: 'Discover enhanced journeys with our Web Design & Mobile App UI/UX services. We specialize in visually engaging websites and user-friendly mobile apps, ensuring seamless and enjoyable interactions.'
    },
    {
        icon: <BrandIcon />,
        title: 'Brand Identity',
        description: 'Elevate your brand presence with our expertise in crafting and consulting on brand identity. Let us shape a distinctive identity that sets your brand apart.'
    }
]

class ServiceTwo extends Component{
    render(){
        let title = 'Services',
        description = 'Explore a spectrum of expertise tailored to meet your needs. Our professional services encompass';
        return(
            <React.Fragment>
                <div className="algorium-service" style={{ position: "relative" }}>
                    <div className="row">
                        <div className="col-lg-4 col-12">
                            <div className="section-title mt--30 mt_md--5 mt_mobile--5 mb_mobile--10">
                                <h2 className="title">{title}</h2>
                                <p>{description}</p>
                                <img alt="robot" src="/assets/images/robot.png" style={{position: "absolute", height: "400px", bottom: "0", left: "-80px"}}/>
                            </div>
                        </div>
                        <div className="col-lg-8 col-12 mt_md--50">
                            <div className="row service-one-wrapper">
                                {ServiceList.map( (val , i) => (
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-12" key={i}>
                                        <div className="service service__style--2">
                                            <div className="icon">
                                                {val.icon}
                                            </div>
                                            <div className="content">
                                                <h3 className="title">{val.title}</h3>
                                                <p>{val.description}</p>
                                            </div>
                                        </div>
                                </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default ServiceTwo;
