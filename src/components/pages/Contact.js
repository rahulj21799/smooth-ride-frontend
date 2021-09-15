import React, { useState } from 'react'
import { useHistory } from 'react-router'
import NavBar from '../NavBar'
import { BASE_URL } from '../../constant/Constant'
import NavBarLogin from '../NavBarLogin'

const Contact = () => {

    const [contactCredentials, setContactCredentials] = useState(
        {
            name: '',
            email: '',
            mobile: null,
            message: ''
        })

    const history = useHistory()

    const contact = async (e) => {
        e.preventDefault();
        const response = await fetch(`${BASE_URL}/authenticate`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: contactCredentials.name, email: contactCredentials.email, mobile: contactCredentials.mobile, message: contactCredentials.message })
        });
        const json = await response.json()
        console.log(json);
        // localStorage.setItem("token", json.id_token);
        history.push("/contact");
    }

    const onChange = (e) => {
        setContactCredentials({ ...contactCredentials, [e.target.name]: e.target.value })
    }

    return (
        <>
            {/* <NavBar /> */}
            {/* <h1>Contact</h1> */}
            <NavBarLogin/>
            <div className='container' style={{ width: '50%', marginTop: 60, fontSize: 15 }}>
                <form onSubmit={contact}>
                    <h3 style={{ margin: 30, textAlign: 'center', fontSize: 50 }}><strong>Contact Us</strong></h3>

                    <div className="form-group">
                        <label>Full Name</label>
                        <input type="text" name='name' value={contactCredentials.name} onChange={onChange} className="form-control" placeholder="Enter full name" style={{ fontSize: 12 }} />
                    </div>

                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" name='email' value={contactCredentials.email} onChange={onChange} className="form-control" placeholder="Enter email" style={{ fontSize: 12 }} />
                    </div>

                    <div className="form-group">
                        <label>Mobile No.</label>
                        <input type="number" name='mobile' value={contactCredentials.mobile} onChange={onChange} className="form-control" placeholder="Enter mobile no." style={{ fontSize: 12 }} />
                    </div>

                    <div className="form-group">
                        <label>Message</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name='message' value={contactCredentials.message} onChange={onChange}></textarea>
                    </div>


                    <button type="submit" className="btn btn-warning btn-block mt-5" style={{ fontSize: 20 }}>Send</button>

                </form>
            </div>
        </>
    )
}

export default Contact
