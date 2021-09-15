import React from 'react'
import { Link } from 'react-router-dom'

const BookingForm = () => {
    return (
        <div className='booking-form' >
            <div className="tabulation mt-5" >

                <ul className="nav nav-tabs" role="tablist">
                    <div className='row' style={{fontSize: 30, marginLeft: 30}} >
                        {/* <div className='col-sm-6' > */}
                            <li role="presentation" className="active">
                                <p>BOOK-TAXI</p>
                            </li>
                        {/* </div> */}
                        {/* <div className='col-sm-5'>
                            <li role="presentation">
                                <a href="#hotels" aria-controls="hotels" role="tab" style={{ color: 'black' }} data-toggle="tab">Outstation</a>
                            </li>
                        </div>
                        <div className='col-sm-3'>
                            <li role="presentation">
                                <a href="#packages" aria-controls="packages" role="tab" style={{ color: 'black' }} data-toggle="tab">Rentals</a>
                            </li>
                        </div> */}
                    </div>
                </ul>

                <div className="tab-content">
                    <div role="tabpanel" className="tab-pane active" id="flights">
                        <div className="row" style={{ fontSize: 15, margin: 30, marginTop: 50, padding: 60, }}>
                            <div className="col-sm-12 mt" >
                                <div className="input-field">
                                    <label htmlFor="from">Pickup:</label>
                                    <input type="text" style={{ fontSize: 15 }} className="form-control" id="from-place" placeholder="Vijay Nagar, Indore" />
                                </div>
                            </div>
                            <div className="col-sm-12 mt">
                                <div className="input-field">
                                    <label htmlFor="from">Destination:</label>
                                    <input type="text" style={{ fontSize: 15 }} className="form-control" id="to-place" placeholder="C21, A.B Road, Indore" />
                                </div>
                            </div>
                            <div className="col-sm-12 mt">
                                <div className="input-field">
                                    <label htmlFor="date-start">Book-Time:</label>
                                    <input type="text" style={{ fontSize: 15 }} className="form-control" id="date-start" placeholder="mm/dd/yyyy" />
                                </div>
                            </div>

                            <div className="col-sm-12 mt-5">
                                <Link to='/login'><button type="submit" disabled style={{ fontSize: 15 }} className="btn btn-primary btn-block" value="Search Rides">Search Rides</button></Link>
                            </div>
                        </div>
                    </div>

                    <div role="tabpanel" className="tab-pane" id="hotels">
                        <div className="row" style={{ fontSize: 15, margin: 30, marginTop: 50, padding: 60, }}>
                            <div className="col-xxs-12 col-xs-12 mt">
                                <div className="input-field">
                                    <label htmlFor="from">Pickup location:</label>
                                    <input style={{ fontSize: 15 }} type="text" className="form-control" id="from-place" placeholder="Indore, Madhya Pradesh" />
                                </div>
                            </div>
                            <div className="col-xxs-12 col-xs-12 mt">
                                <div className="input-field">
                                    <label htmlFor="from">Drop location:</label>
                                    <input style={{ fontSize: 15 }} type="text" className="form-control" id="from-place" placeholder="Bhopal, Madhya Pradesh" />
                                </div>
                            </div>
                            <div className="col-xxs-12 col-xs-6 mt alternate">
                                <div className="input-field">
                                    <label htmlFor="date-end">Book Now or Later:</label>
                                    <input style={{ fontSize: 15 }} type="text" className="form-control" id="date-end" placeholder="mm/dd/yyyy" />
                                </div>
                            </div>
                            <div className="col-sm-12 mt-5">
                                <input style={{ fontSize: 15 }} type="submit" className="btn btn-primary btn-block" value="Book Ride" />
                            </div>
                        </div>
                    </div>

                    <div role="tabpanel" className="tab-pane" id="packages">
                        <div className="row" style={{ fontSize: 15, margin: 30, marginTop: 50, padding: 60, }}>
                            <div className="col-xxs-12 col-xs-6 mt">
                                <div className="input-field" >
                                    <label htmlFor="from">City:</label>
                                    <input style={{ fontSize: 15 }} type="text" className="form-control" id="from-place" placeholder="Los Angeles, USA" />
                                </div>
                            </div>
                            <div className="col-xxs-12 col-xs-6 mt">
                                <div className="input-field">
                                    <label htmlFor="from">Destination:</label>
                                    <input style={{ fontSize: 15 }} type="text" className="form-control" id="to-place" placeholder="Tokyo, Japan" />
                                </div>
                            </div>
                            <div className="col-xxs-12 col-xs-6 mt alternate">
                                <div className="input-field">
                                    <label htmlFor="date-start">Departs:</label>
                                    <input style={{ fontSize: 15 }} type="text" className="form-control" id="date-start" placeholder="mm/dd/yyyy" />
                                </div>
                            </div>
                            <div className="col-xxs-12 col-xs-6 mt alternate">
                                <div className="input-field">
                                    <label htmlFor="date-end">Return:</label>
                                    <input style={{ fontSize: 15 }} type="text" className="form-control" id="date-end" placeholder="mm/dd/yyyy" />
                                </div>
                            </div>
                            <div className="col-sm-12 mt" style={{ fontSize: 15 }}>
                                <section>
                                    <label htmlFor="className">Ride-Type:</label>
                                    <select className="cs-select cs-skin-border">
                                        <option value="" disabled defaultValue>Choose ride type...</option>
                                        <option value="economy">Mini car</option>
                                        <option value="first">Sedan</option>
                                        <option value="business">Travellor</option>
                                        <option value="business">Jeep</option>
                                    </select>
                                </section>
                            </div>
                            <div className="col-sm-12 mt-5">
                                <input style={{ fontSize: 15 }} type="submit" className="btn btn-primary btn-block" value="Book Ride plan" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default BookingForm
