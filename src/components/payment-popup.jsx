import React from 'react';

class Checkout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ...State,
            order: props.order,
            payment: props.payment
        };

        this.updatePaymentField = this.updatePaymentField.bind(this);
        this.handlePaymentFieldChange = this.handlePaymentFieldChange.bind(this);
        this.handleFieldChange = this.handleFieldChange.bind(this);
    }

    componentDidMount() {
        this.setState(prevState => ({
            payment: {
                ...prevState.payment,
                promoValue: this.props.payment.promoValue,
            }
        }))
    }

    validateFields = () => {
        if (this.props.order.duoQueue || this.props.order.boostingType === 'coaching') {
            if (
                !this.state.payment.email ||
                this.state.payment.email.trim() == "" ||
                !this.state.payment.ingameName ||
                this.state.payment.ingameName.trim() == ""
            ) {
                return false;
            }
            return true;
        } else {
            if (
                !this.state.payment.email ||
                this.state.payment.email.trim() == "" ||
                !this.state.payment.username || this.state.payment.username.trim() === ""
                || !this.state.payment.password || this.state.payment.password.trim() === "" ||
                !this.state.payment.ingameName ||
                this.state.payment.ingameName.trim() == ""
            ) {
                return false;
            }
            return true;
        }
    };

    handleValidations = () => {
        if (!this.validateFields()) {
            this.props.alert.show(
                <div className="bahn">Please add all the required fields.</div>,
                { type: "error" }
            );
            return false;
        }
        if (!validateEmail(this.state.payment.email)) {
            this.props.alert.show(
                <div className="bahn">Please enter a valid email.</div>,
                { type: "error" }
            );
            return false;
        }

        return true
    };

    handleOverlayClick = (event) => {
        if (event.target === event.currentTarget) {
            this.props.onClose();
        }
    };

    handleCheckOut = (event) => {
        console.log({ order: this.props.order, payment: this.state.payment, boostingType: this.props.order.boostingType })
        if (!this.handleValidations()) { return; }
        const data = { order: this.props.order, payment: this.state.payment, boostingType: this.props.order.boostingType }
        data.payment.promoValue = this.props.payment.promoValue;
        data.payment.promoCode = this.props.payment.promoCode;
        if (this.props.payment.promoValue == 100 && this.props.payment.promoCode) {
            Meteor.call("orders.insertManualOrder", data, this.props.payment.promoCode, (err, res) => {
                if (err) {
                    console.log(err);
                } else {
                    this.props.alert.show(
                        <div className="bahn">Manual order added successfuly.</div>,
                        { type: "success" }
                    );
                }
            })
            this.props.onClose();
            return;
        }
        this.setState({ spinnerVisible: true });
        data.customerId = Meteor.userId();
        data.customerName = Meteor.user()?.name || 'Customer';
        console.log(data)
        if (this.state.payment.paymentMethod === "crypto") {
            Meteor.call("coinbase.createCharge", data, (err, res) => {
                window.location = res;
            });
        } else if (this.state.payment.paymentMethod === "stripe") {
            Meteor.call("stripe.createCharge", data, (err, res) => {
                if (res) {
                    window.location = res.url;
                }

            });
        }
    };


    render() {
        return this.props.isOpen ? (
            <div className="modal-overlay" onClick={this.handleOverlayClick}>
                <div id="modal-popup" class="col-10 position-relative mx-auto bg-white text-center modal-popup-main padding-4-half-rem-all border-radius-6px sm-padding-2-half-rem-lr">
                    <span class="text-extra-dark-gray text-uppercase alt-font text-extra-large font-weight-600 margin-15px-bottom d-block">Checkout</span>
                    <div className='row' style={{ marginBottom: 50 }}>
                        <div className='row'>
                            <div className='col-6'>
                                <label className="payment-box">
                                    <input
                                        type="radio"
                                        name="payment-method"
                                        value="stripe"
                                        checked={this.state.payment.paymentMethod === "stripe"}
                                        onChange={(e) =>
                                            this.handlePaymentFieldChange(e, "paymentMethod")
                                        }
                                    />
                                    <img src="images/stripe.png" />
                                </label>
                            </div>
                            <div className='col-6'>
                                <label className="payment-box">
                                    <input
                                        type="radio"
                                        name="payment-method"
                                        value="crypto"
                                        checked={this.state.payment.paymentMethod === "crypto"}
                                        onChange={(e) =>
                                            this.handlePaymentFieldChange(e, "paymentMethod")
                                        }
                                    />
                                    <img src="images/crypto.png" />
                                </label>
                            </div>
                        </div>
                    </div>

                    <div class="row">

                        <div className='col-4'>
                            <input class="medium-input margin-25px-bottom xs-margin-10px-bottom required" type="text" name="ingameName" placeholder="Ingame Name" onChange={(e) => this.handlePaymentFieldChange(e, "ingameName")} />

                        </div>
                        {!this.props.order.duoQueue && this.props.order.boostingType !== 'coaching' && (
                            <>
                                <div class="col-4">
                                    <input class="medium-input margin-25px-bottom xs-margin-10px-bottom required" type="text" name="username" placeholder="Username" onChange={(e) => this.handlePaymentFieldChange(e, "username")} />
                                </div>
                                <div class="col-4">
                                    <input class="medium-input margin-25px-bottom xs-margin-10px-bottom required" type="password" name="password" placeholder="Password" onChange={(e) => this.handlePaymentFieldChange(e, "password")} />
                                </div>
                            </>
                        )}
                    </div>

                    <div class="row">
                        <div class="col-4">
                            <input class="medium-input margin-25px-bottom xs-margin-10px-bottom required" type="text" name="email" placeholder="Email" onChange={(e) => this.handlePaymentFieldChange(e, "email")} />
                        </div>
                        <div class="col-4">
                            <input class="medium-input margin-25px-bottom xs-margin-10px-bottom required" type="text" name="discord" placeholder="Discord" onChange={(e) => this.handlePaymentFieldChange(e, "discord")} />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12'>
                            <textarea className='medium-input margin-25px-bottom xs-margin-10px-bottom' rows="4" name="notes" placeholder='Notes' onChange={(e) => this.props.updateOrderField("notes", e.target.value)} />
                        </div>
                    </div>
                    <div class="row vertical-gap">
                        <div className='col-6'>
                            <button onClick={(e) => this.handleCheckOut(e)} type='button' className='btn btn-fancy btn-small btn-transparent-light-gray' style={{ width: '100%' }}>
                                {this.state.spinnerVisible ? (
                                    <Spinner
                                        as="span"
                                        animation="border"
                                        size="sm"
                                        role="status"
                                        aria-hidden="true"
                                    />
                                ) : (
                                    `Checkout`
                                )}</button>
                        </div>
                        <div className='col-6'>
                            <button onClick={() => this.props.onClose()} type='button' className='btn btn-fancy btn-small btn-transparent-light-gray' style={{ width: '100%' }}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        ) : null;
    }
}
Object.assign(Checkout.prototype, StateUpdateMixin);
export default withAlert()(Checkout);
