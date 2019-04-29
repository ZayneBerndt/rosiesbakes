import React from 'react';
import '../assets/Booking.css'

class Booking extends React.Component {
    render() {
        return(
            <React.Fragment>
            <div id="booking" class="section">
            <div className="section-center">
                <div className="container">
                    <div className="row">
                        <div className="booking-form">
                            <div className="booking-bg">
                                <div className="form-header">
                                    <h2>Order your cake</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate laboriosam numquam at</p>
                                </div>
                            </div>
                            <form>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            {/* <span className="form-label">Check In</span>
                                            <input className="form-control" type="date" required/> */}
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <span className="form-label">Delivery</span>
                                            <input className="form-control" type="date" required/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <span className="form-label">Cakes</span>
                                            <select className="form-control">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                            </select>
                                            <span className="select-arrow"></span>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <span className="form-label">Children</span>
                                            <select className="form-control">
                                                <option>0</option>
                                                <option>1</option>
                                                <option>2</option>
                                            </select>
                                            <span className="select-arrow"></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <span className="form-label">Cake Type</span>
                                    <select className="form-control" required>
                                        <option value="" selected hidden>Select room type</option>
                                        <option>Wedding Cake (10 to 20 People)</option>
                                        <option>Birthday Cake (10 to 20 People)</option>
                                    </select>
                                    <span className="select-arrow"></span>
                                </div>
                                <div className="form-btn">
                                    <button className="submit-btn">Check availability</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </React.Fragment>
        )
    }
}
export default Booking;
