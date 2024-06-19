import React, { useState } from 'react';
import './services.css';

const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }
  return (
    <section className="services section" id="services">
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">What I offer</span>

        <div className="services__container container grid">
            <div className="services__content">
                <div>
                    <i className="uil uil-web-grid services__icon"></i>
                    <h3 className="services__title">
                        Frontend <br /> 
                    </h3>
                </div>

                <span className="services__button" onClick={() => toggleTab(1)}>
                    View More
                    <i className="uil uil-arrow-right services__button-icon"></i>
                </span>

                <div className={ toggleState === 1 ? "services__modal active-modal" : "services__modal" } >
                    <div className="services__modal-content">
                        <i onClick={ () => toggleTab(0) } className="uil uil-times services__modal-close"></i>

                        <h3 className="services__modal-title">Frontend</h3>
                        <p className="services__modal-description">
                            Focused on creating user-friendly and visually appealing interfaces, prioritizing intuitive navigation and seamless interactions for websites and applications.
                        </p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    I develop the user interface.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    I ensure responsive and mobile-friendly layouts.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    I implement interactive features and animations to enhance user engagement.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-arrow services__icon"></i>
                    <h3 className="services__title">
                        Backend <br /> 
                    </h3>
                </div>

                <span className="services__button" onClick={() => toggleTab(2)}>
                    View More
                    <i className="uil uil-arrow-right services__button-icon"></i>
                </span>

                <div className={ toggleState === 2 ? "services__modal active-modal" : "services__modal" }>
                    <div className="services__modal-content">
                        <i onClick={ () => toggleTab(0) } className="uil uil-times services__modal-close"></i>

                        <h3 className="services__modal-title">Backend</h3>
                        <p className="services__modal-description">
                            Knowing in building robust server-side applications with skills in efficient database management and API integration, ensuring reliable and scalable backend systems.
                        </p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    I build server-side applications using Node.js, Flask, and Spring Boot.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    I integrate databases into projects.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    I create RESTful APIs to facilitate communication between both-side components.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-server-network services__icon"></i>
                    <h3 className="services__title">
                        Fullstack <br /> 
                    </h3>
                </div>

                <span className="services__button" onClick={() => toggleTab(3)}>
                    View More
                    <i className="uil uil-arrow-right services__button-icon"></i>
                </span>

                <div className={ toggleState === 3 ? "services__modal active-modal" : "services__modal" }>
                    <div className="services__modal-content">
                        <i onClick={ () => toggleTab(0) } className="uil uil-times services__modal-close"></i>

                        <h3 className="services__modal-title">Fullstack</h3>
                        <p className="services__modal-description">
                            Delivering comprehensive web solutions by combining frontend and backend technologies, crafting responsive interfaces and implementing backend functionalities for cohesive user experiences.
                        </p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    I create comprehensive web solutions using different stacks.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    I manage data flow between frontend and backend systems.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    I deploy applications on various platforms to ensure robust performance.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Services;
