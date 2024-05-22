import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {

    return (
        <>
            <Navbar />
            <section className="p-0">
                <div className="swiper-container white-move mobileoff-fullscreen-top-space md-h-600px sm-h-500px" data-slider-options='{ "slidesPerView": 1, "loop": true, "pagination": { "el": ".swiper-pagination", "clickable": true }, "navigation": { "nextEl": ".swiper-button-next-nav", "prevEl": ".swiper-button-previous-nav" }, "autoplay": { "delay": 4500, "disableOnInteraction": false }, "keyboard": { "enabled": true, "onlyInViewport": true }, "effect": "slide" }'>
                    <div className="swiper-wrapper">
                        <div className="swiper-slide cover-background" style={{ backgroundImage: "url('images/bg.jpg')" }}>
                            <div className="overlay-bg bg-gradient-dark-slate-blue"></div>
                            <div className="container h-100">
                                <div className="row h-100">
                                    <div className="col-12 col-xl-6 col-lg-7 col-sm-8 h-100 d-flex justify-content-center flex-column position-relative">
                                        <p className="alt-font text-extra-medium text-white opacity-7 font-weight-300 margin-40px-bottom xs-margin-20px-bottom">Delivering beautiful digital products</p>
                                        <h2 className="alt-font text-shadow-double-large font-weight-600 text-white margin-55px-bottom w-90 md-w-100 md-no-text-shadow xs-margin-35px-bottom">Start your online business today</h2>
                                        <div className="d-inline-block">
                                            <a href="#" target="_blank" className="btn btn-fancy btn-medium btn-gradient-sky-blue-pink margin-30px-right xs-margin-15px-bottom">Purchase now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-pagination swiper-light-pagination"></div>
                    <div className="swiper-button-previous-nav swiper-button-prev rounded-circle slider-navigation-style-07"><i className="feather icon-feather-arrow-left"></i></div>  -->
                </div >
            </section >
            <section className="big-section wow animate__fadeIn">
                <div className="container">
                    <div className="row justify-content-center wow animate__fadeIn">
                        <div className="col-12 col-xl-3 col-lg-4 col-sm-7 d-flex flex-column text-center text-lg-start md-margin-6-rem-bottom">
                            <div className="margin-20px-bottom sm-margin-10px-bottom">
                                <span className="alt-font text-medium text-gradient-sky-blue-pink text-uppercase font-weight-500">About company</span>
                            </div>
                            <h5 className="alt-font text-extra-dark-gray font-weight-600 margin-20px-bottom md-margin-30px-bottom xs-w-90 mx-auto mx-sm-0">We combine design, thinking and technical</h5>
                            <div className="mt-auto mx-auto mx-lg-0">
                                <a href="index.html" className="btn btn-fancy btn-small btn-transparent-light-gray">Discover litho</a>
                            </div>
                        </div>
                        <div className="col-12 col-xl-7 offset-xl-2 col-lg-8 last-paragraph-no-margin wow animate__fadeIn" data-wow-duration="0.3">
                            <div className="row row-cols-1 row-cols-lg-2 row-cols-sm-2">
                                <div className="col margin-60px-bottom sm-margin-30px-bottom xs-margin-40px-bottom wow animate__fadeIn">
                                    <div className="feature-box feature-box-left-icon">
                                        <div className="feature-box-icon">
                                            <i className="line-icon-Money-Bag icon-medium text-extra-light-gray margin-35px-bottom md-margin-15px-bottom sm-margin-10px-bottom"></i>
                                        </div>
                                        <div className="feature-box-content last-paragraph-no-margin">
                                            <span className="alt-font font-weight-500 margin-10px-bottom d-block text-extra-dark-gray">Effective strategy</span>
                                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col margin-60px-bottom sm-margin-30px-bottom xs-margin-40px-bottom wow animate__fadeIn" data-wow-delay="0.2s">
                                    <div className="feature-box feature-box-left-icon">
                                        <div className="feature-box-icon">
                                            <i className="line-icon-Gear-2 icon-medium text-extra-light-gray margin-35px-bottom md-margin-15px-bottom sm-margin-10px-bottom"></i>
                                        </div>
                                        <div className="feature-box-content last-paragraph-no-margin">
                                            <span className="alt-font font-weight-500 margin-10px-bottom d-block text-extra-dark-gray">Powerfull customize</span>
                                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col xs-margin-40px-bottom wow animate__fadeIn" data-wow-delay="0.4s">
                                    <div className="feature-box feature-box-left-icon">
                                        <div className="feature-box-icon">
                                            <i className="line-icon-Talk-Man icon-medium text-extra-light-gray margin-35px-bottom md-margin-15px-bottom sm-margin-10px-bottom"></i>
                                        </div>
                                        <div className="feature-box-content last-paragraph-no-margin">
                                            <span className="alt-font font-weight-500 margin-10px-bottom d-block text-extra-dark-gray">Customer satisfaction</span>
                                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col wow animate__fadeIn" data-wow-delay="0.6s">
                                    <div className="feature-box feature-box-left-icon">
                                        <div className="feature-box-icon">
                                            <i className="line-icon-Cursor-Click2 icon-medium text-extra-light-gray margin-35px-bottom md-margin-15px-bottom sm-margin-10px-bottom"></i>
                                        </div>
                                        <div className="feature-box-content last-paragraph-no-margin">
                                            <span className="alt-font font-weight-500 margin-10px-bottom d-block text-extra-dark-gray">No coding required</span>
                                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="overflow-visible position-relative z-index-1 bg-light-blue">
                <div className="container">
                    <div className="row justify-content-center ">
                        <div className="col-12 col-lg-5 col-sm-9 d-flex flex-column text-center text-lg-start md-margin-6-rem-bottom wow animate__fadeIn">
                            <div className="margin-20px-bottom sm-margin-15px-bottom"><span className="alt-font text-medium text-gradient-sky-blue-pink text-uppercase font-weight-500">Our expertise</span></div>
                            <h5 className="alt-font text-extra-dark-gray font-weight-600 w-95 margin-20px-bottom md-margin-30px-bottom lg-w-100">We design brand, digital experience that engage the right customers</h5>
                            <div className="mt-auto mx-auto mx-lg-0">
                                <a href="index.html" className="btn btn-fancy btn-small btn-transparent-light-gray">Discover litho</a>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 offset-lg-1">
                            <div className="row row-cols-1 row-cols-sm-2">
                                <div className="col text-center text-lg-start xs-margin-45px-bottom wow animate__fadeIn" data-wow-delay="0.2s">
                                    <div className="chart-percent d-inline-block margin-40px-bottom xs-margin-20px-bottom">
                                        <span className="pie-chart-style-02" data-line-width="8" data-percent="92" data-track-color="#f5f5f5" data-start-color="#f77993" data-end-color="#5d6ff9">
                                            <span className="percent alt-font font-weight-500 title-extra-small letter-spacing-minus-1px text-extra-dark-gray"></span>
                                        </span>
                                    </div>
                                    <div className="last-paragraph-no-margin wow animate__fadeIn" data-wow-duration="0.2">
                                        <span className="alt-font font-weight-500 margin-5px-bottom d-block text-extra-dark-gray">Innovative solutions</span>
                                        <p className="d-inline-block w-85 lg-w-100 md-w-75 sm-w-95 xs-w-75">Lorem ipsum is simply dummy text of the printing and type.</p>
                                    </div>
                                </div>
                                <div className="col text-center text-lg-start wow animate__fadeIn" data-wow-delay="0.4s">
                                    <div className="chart-percent d-inline-block margin-40px-bottom xs-margin-20px-bottom">
                                        <span className="pie-chart-style-02" data-line-width="8" data-percent="90" data-track-color="#f5f5f5" data-start-color="#f77993" data-end-color="#5d6ff9">
                                            <span className="percent alt-font font-weight-500 title-extra-small letter-spacing-minus-1px text-extra-dark-gray"></span>
                                        </span>
                                    </div>
                                    <div className="last-paragraph-no-margin">
                                        <span className="alt-font font-weight-500 margin-5px-bottom d-block text-extra-dark-gray">Marketing strategy</span>
                                        <p className="d-inline-block w-85 lg-w-100 md-w-75 sm-w-95 xs-w-75">Lorem ipsum is simply dummy text of the printing and type.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;