import React from "react";
import "./../index.css";
import uiImage from "./../images/ui.svg";
import webImage from "./../images/web.svg";

const Services = () => {
    return (
        <section className="services-container" name="services" id="services">
            <h1>Services I Provide</h1>
            <div className="services-wrapper">
                <div className="services">
                    <li>
                        <img src={uiImage} alt="" />
                        <p>Web Development</p>
                    </li>
                </div>
                <div className="services">
                    <li>
                        <img src={webImage} alt="" />
                        <p>React Development</p>
                    </li>
                </div>
            </div>
        </section>
    );
};

export default Services;
