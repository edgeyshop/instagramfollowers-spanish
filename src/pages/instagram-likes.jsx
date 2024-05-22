import React, { useEffect, useMemo, useState } from "react";
import Navbar from "../components/Navbar";

const InstagramLikes = () => {

    const service_id = 60;

    const instagramLikesOptions = [
        { amount: 100, price: '0.80', label: '100 Likes' },
        { amount: 250, price: '1.49', label: '250 Likes' },
        { amount: 500, price: '2.00', label: '500 Likes' },
        { amount: 1000, price: '3.99', label: '1000 Likes' },
        { amount: 2000, price: '6.99', label: '2000 Likes' },
        { amount: 5000, price: '12.99', label: '5000 Likes' },
        { amount: 10000, price: '19.99', label: '10,000 Likes' },
        { amount: 20000, price: '35.99', label: '20,000 Likes' },
    ]

    const [url, setUrl] = useState('');
    const [amount, setAmount] = useState(100);


    const price = useMemo(() => {
        return instagramLikesOptions.find(item => item.amount == amount)?.price;
    }, [amount]);

    async function createCoinbaseCharge(data) {
        try {
            const response = await fetch('https://edgeyshop-instagramfollowers-serv.vercel.app/processPayment-coinbase', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                throw new Error('Failed to create Coinbase charge');
            }

            const responseData = await response.json();
            return responseData.hosted_url; // Return the hosted URL
        } catch (error) {
            console.error('Error creating Coinbase charge:', error.message);
            throw error; // Rethrow the error to handle it further if needed
        }
    }

    const handleCoinbase = async () => {
        const data = {
            url,
            amount,
            service_id
        }
        createCoinbaseCharge(data)
            .then(hostedUrl => {
                console.log('Coinbase charge created. Hosted URL:', hostedUrl);
                window.location = hostedUrl;
            })
            .catch(error => {
                console.error('Coinbase charge creation failed:', error.message);
            });
    }

    async function processPaymentStripe(data) {
        try {
            const response = await fetch('https://edgeyshop-instagramfollowers-serv.vercel.app/processPayment-stripe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                throw new Error('Failed to process payment');
            }

            return response.json(); // Return the response directly
        } catch (error) {
            console.error('Error processing payment:', error.message);
            throw error; // Rethrow the error to handle it further if needed
        }
    }

    const handleStripe = async () => {
        const data = {
            url,
            amount,
            service_id
        };

        try {
            const response = await processPaymentStripe(data);
            window.location = response.session.url;
        } catch (error) {
            console.error('Payment failed:', error.message);
            // Handle the error accordingly
        }
    };



    return (
        <>
            <Navbar />
            <section style={{ paddingTop: 100 }}>
                <div className="container">
                    <div className="row justify-content-center ">
                        <div className="col-12 col-lg-5 col-sm-9 d-flex flex-column text-center text-lg-start md-margin-6-rem-bottom wow animate__fadeIn">
                            <div className="product-images-box lightbox-portfolio row">
                                <div className="col-12 col-lg-9 position-relative px-lg-0 order-lg-2 product-image md-margin-10px-bottom">
                                    <div className="swiper-container product-image-slider" data-slider-options='{ "spaceBetween": 10, "watchOverflow": true, "navigation": { "nextEl": ".slider-product-next", "prevEl": ".slider-product-prev" }, "thumbs": {"swiper": {"el": ".product-image-thumb", "slidesPerView": "auto", "spaceBetween": 15, "direction": "vertical", "navigation": {"nextEl": ".swiper-thumb-next", "prevEl": ".swiper-thumb-prev" } } } }' data-thumb-slider-md-direction="horizontal">
                                        <div className="swiper-wrapper">
                                            <div className="swiper-slide">
                                                <img className="w-100" src="images/instagram.jpg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 offset-lg-1">
                            <div className="breadcrumb text-small p-0">
                                <ul>
                                    <li><a href="index.html">Home</a></li>
                                    <li><a href="shop-wide.html">Shop</a></li>
                                    <li>Instagram Likes</li>
                                </ul>
                            </div>
                            <div className="d-flex align-items-center">
                                <div className="flex-grow-1">
                                    <div className="text-extra-dark-gray font-weight-500 text-extra-large alt-font margin-5px-bottom">Buy Instagram Likes</div>
                                    <span className="product-price text-extra-medium">{price} €</span>
                                </div>
                                <div className="text-end line-height-30px">
                                    <div><a href="#" className="letter-spacing-3px"><i className="fas fa-star text-very-small text-golden-yellow"></i><i className="fas fa-star text-very-small text-golden-yellow"></i><i className="fas fa-star text-very-small text-golden-yellow"></i><i className="fas fa-star text-very-small text-golden-yellow"></i><i className="fas fa-star text-very-small text-golden-yellow"></i></a></div>
                                </div>
                            </div>
                            <div className="last-paragraph-no-margin">
                                <p>
                                    Buying Instagram Likes will make you instantly receive the likes you want as soon as you post to your profile. Automate your Instagram account quickly and 100% securely.
                                </p>
                                <br />
                                Amount
                                <select value={amount} onChange={e => setAmount(e.target.value)}>
                                    {instagramLikesOptions.map((item, index) => (
                                        <option key={index} value={item.amount}>
                                            {item.label}
                                        </option>
                                    ))}
                                </select>
                                Enter the URL
                                <input type="text" value={url} onChange={e => setUrl(e.target.value)} />
                            </div>
                            Pay With:
                            <div className="row">
                                <div className="col">
                                    <button onClick={handleCoinbase} disabled={url === ''} className="btn "><img src="images/crypto.png" /></button>
                                </div>
                                <div className="col">
                                    <button onClick={handleStripe} disabled={url === ''} className="btn "><img src="images/stripe.png" /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    );
}

export default InstagramLikes;