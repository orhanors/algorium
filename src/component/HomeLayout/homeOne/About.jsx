import React, { Component } from "react";

class About extends Component{
    render(){
        let title = 'About',
        description = 'Welcome to Algorium.uk, where innovation meets reliability. As a dynamic startup based in the heart of the UK, we are passionate about crafting digital experiences that seamlessly blend creativity and functionality.';
        return(
            <React.Fragment>
                <div className="about-wrapper">
                    <div className="container">
                        <div className="row row--35 align-items-center">

                            <div className="col-lg-5 col-md-12">
                                <div className="thumbnail">
                                    <img className="w-100" src="/assets/images/about/about-1.jpg" alt="About Images"/>
                                </div>
                            </div>

                            <div className="col-lg-7 col-md-12">
                                <div className="about-inner inner">
                                    <div className="section-title">
                                        <h2 className="title">{title}</h2>
                                        <p className="description">{description}</p>
                                    </div>
                                    <div className="row mt--30 mt_sm--10">
                                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                            <div className="about-us-list">
                                                <h3 className="title">Who we are</h3>
                                                <p>We are a passionate group, comprised of individuals deeply immersed in the digital realm and visual arts, directing our focus towards the future. For the past 5 years, our team has been fueled by genuine enthusiasm, approaching our work with unwavering passion.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                            <div className="about-us-list">
                                                <h3 className="title">Our Mission</h3>
                                                <p>We are on a mission to make technology seamless and impactful. Redefining industry norms, we're dedicated to accessible, forward-thinking solutions. Join us as we navigate the digital future, crafting experiences that effortlessly blend innovation and simplicity.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default About;