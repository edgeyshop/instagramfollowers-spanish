import React from "react";
import Navbar from "../components/Navbar";

const Success = () => {

    return (
        <>
            <Navbar />
            <section class="big-section">
                <div class="container">
                    <div class="row align-items-center justify-content-center">
                        <div className="col-12 text-center margin-7-rem-bottom">
                            <h4>Thank you for your Order and Trust at Cheapest Followers</h4>
                            <h5>Dear Customer!<br />
                                Your order was created and it is now processing
                            </h5>
                        </div>
                    </div>
                </div>
            </section>
        </>

    );
};

export default Success;
