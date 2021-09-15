import React, { useState } from 'react'
import { useHistory } from 'react-router'
import NavBar from '../components/NavBar'
import { BASE_URL } from '../constant/Constant'

const ForgetPassword = () => {

    const [forgetCredentials, setForgetCredentials] = useState({
        email: '',
        password: '',
        cpassword: '',
        newPassword: ''
    })

    const history = useHistory()

    const forgetPassword = async(e) => {
        e.prevantDefault();
        
        const response = await fetch(`${BASE_URL}/account/change-password`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ setForgetCredentials })
        });
        const json = await response.json()
        localStorage.setItem("token", json.id_token);
        history.push("/login");
        console.log(json);
    }

    const onChange = (e) => {
        setForgetCredentials({...forgetCredentials, [e.target.name]: e.target.value})
    }

    return (
        <>
            <NavBar/>
            <div className='container' style={{ width: '50%', marginTop: 60, fontSize: 15 }}>
                <form onSubmit={forgetPassword}>
                    <h3 style={{margin: 30, textAlign: 'center', fontSize: 50}}><strong>Reset Password</strong></h3>

                    <div className="form-group">
                                <label>Email address</label>
                                <input type="email" name='email' value={forgetCredentials.email} onChange={onChange} className="form-control" placeholder="Enter email" style={{ fontSize: 12 }} />
                            </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" style={{ fontSize: 15 }} />
                    </div>

                    <div className="form-group">
                        <label>Confirm Password</label>
                        <input type="password" className="form-control" placeholder="re-write password" style={{ fontSize: 15 }} />
                    </div>

                    <div className="form-group">
                        <label>New Password</label>
                        <input type="password" className="form-control" placeholder="Enter new password" style={{ fontSize: 15 }} />
                    </div>

                    <button type="submit" className="btn btn-secondary btn-block mt-5" style={{ fontSize: 20 }}>Password Reset</button>
                    
                </form>
            </div>
        </>
    )
}

export default ForgetPassword
