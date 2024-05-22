import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <header className="header-with-topbar" style={{ marginBottom: '150px' }}>
            <div className="top-bar bg-light-gray d-none d-md-inline-block padding-35px-lr md-no-padding-lr" style={{ top: '0px' }}>
                <div className="container-fluid nav-header-container">
                    <div className="d-flex flex-wrap align-items-center">
                        <div className="col text-center text-sm-start col-sm-auto me-auto ps-lg-0">
                            <p className="text-medium m-0"><span className="font-weight-500 text-extra-dark-gray">Cheapest social media followers.</span></p>
                        </div>
                        <div className="col text-center text-sm-start col-sm-auto me-auto ps-lg-0">
                            <p className="text-medium m-0"><span className="font-weight-500 text-fast-blue">Welcome to our store</span></p>
                        </div>
                        <div className="col-auto d-none d-sm-block text-end px-lg-0 font-size-0">
                            <div className="top-bar-contact">
                                <span className="top-bar-contact-list border-none md-no-padding-right">
                                    <i className="feather icon-feather-phone-call icon-extra-small text-extra-dark-gray"></i>24/7 Support
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <nav className="navbar navbar-expand-lg top-space navbar-light bg-white header-light fixed-top navbar-boxed header-reverse-scroll" style={{ top: '48px' }}>
                <div className="container-fluid nav-header-container">
                    <div className="col-6 col-lg-2 me-auto ps-lg-0">
                        <span className="navbar-brand">
                            <img src="/images/logo.png" data-at2x="images/logo.png" className="default-logo" alt="" />
                            <img src="/images/logo.png" data-at2x="images/logo.png" className="alt-logo" alt="" />
                            <img src="/images/logo.png" data-at2x="images/logo.png" className="mobile-logo" alt="" />
                        </span>
                    </div>
                    <div className="col-auto menu-order px-lg-0">
                        <button className="navbar-toggler float-end" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-label="Toggle navigation">
                            <span className="navbar-toggler-line"></span>
                            <span className="navbar-toggler-line"></span>
                            <span className="navbar-toggler-line"></span>
                            <span className="navbar-toggler-line"></span>
                        </button>
                        <div className=" collapse navbar-collapse justify-content-center" id="navbarNav">
                            <ul className="navbar-nav alt-font">
                                <li className="nav-item dropdown megamenu">
                                    <Link to="/" className="nav-link">
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item dropdown megamenu">
                                    <Link to="/instagram-followers" className="nav-link">
                                        Instagram Followers
                                    </Link>
                                </li>
                                <li className="nav-item dropdown megamenu">
                                    <Link to="/instagram-likes" className="nav-link">Instagram Likes</Link>
                                </li>
                                <li className="nav-item dropdown megamenu">
                                    <Link to="/instagram-reel-views" className="nav-link">
                                        Instagram Reel Views
                                    </Link>
                                </li>
                                <li className="nav-item dropdown megamenu">
                                    <Link to="/tiktok-views" className="nav-link">
                                        Tiktok Views
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
