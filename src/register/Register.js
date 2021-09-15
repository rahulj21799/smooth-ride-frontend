import React, { useState } from 'react'
import { useHistory } from 'react-router'
import NavBar from '../components/NavBar'
import { BASE_URL } from '../constant/Constant'

const Register = () => {

    const [registerCredentials, setRegisterCredentials] = useState(
        {
            firstName: '',
            lastName: '',
            username: '',
            email: '',
            mobile: '',
            password: '',
            cpassword: ''
        })

    const history = useHistory()

    const register = async (e) => {
        e.preventDefault();
        const response = await fetch(`${BASE_URL}/user/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstName: registerCredentials.firstName,
                lastName: registerCredentials.lastName,
                username: registerCredentials.username,
                email: registerCredentials.email,
                mobile: registerCredentials.mobile,
                password: registerCredentials.password,
                cpassword: registerCredentials.cpassword
            }),
        });
        const json = await response.json()
        console.log(json);
        setRegisterCredentials({ firstName: '', lastName: '', username: '', email: '', mobile: '', password: '', cpassword: ''})
        history.push("/login");
    }

    const onChange = (e) => {
        setRegisterCredentials({ ...registerCredentials, [e.target.name]: e.target.value })
    }

    return (
        <>
            <NavBar />
            <div className='row'>
                <div className='col-4'>
                    <h3 style={{ margin: 30, textAlign: 'center', fontSize: 50 }}><strong>Register to SMOOTH-RIDE!!!</strong></h3>
                    <img style={{ margin: 20, width: '120%' }} src='https://www.creativefabrica.com/wp-content/uploads/2020/09/02/Auto-car-logo-design-Graphics-5237528-1-1-580x387.jpg' />
                </div>

                <div className='col-6'>
                    <div className='container' style={{ width: '40%', fontSize: 12, marginTop: 100 }}>
                        <form onSubmit={register}>
                            <div className='row'>

                                <div className='col-6'>
                                    <div className="form-group">
                                        <label>First Name</label>
                                        <input type="text" name='firstName' value={registerCredentials.firstName} onChange={onChange} className="form-control" placeholder="Enter first name" required style={{ fontSize: 12 }} />
                                    </div>
                                    </div>

                                    <div className='col-6'>
                                    <div className="form-group">
                                        <label>Last Name</label>
                                        <input type="text" name='lastName' value={registerCredentials.lastName} onChange={onChange} className="form-control" placeholder="Enter last name" required style={{ fontSize: 12 }} />
                                    </div>
                                    </div>
                                
                            </div>
                            <div className="form-group">
                                <label>User Name</label>
                                <input type="text" name='username' value={registerCredentials.username} onChange={onChange} className="form-control" placeholder="Enter user name" minLength={6} required style={{ fontSize: 12 }} />
                            </div>
                            <div className="form-group">
                                <label>Email address</label>
                                <input type="email" name='email' value={registerCredentials.email} onChange={onChange} className="form-control" placeholder="Enter email"  required style={{ fontSize: 12 }} />
                            </div>

                            <div className="form-group">
                                <label>Mobile No.</label>
                                <input type="number" name='mobile' value={registerCredentials.mobile} onChange={onChange} minLength={10} className="form-control" placeholder="Enter mobile no."  required style={{ fontSize: 12 }} />
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" name='password' value={registerCredentials.password} minLength={5} onChange={onChange} className="form-control" placeholder="Enter password" required style={{ fontSize: 12 }} />
                            </div>

                            <div className="form-group">
                                <label>Confirm Password</label>
                                <input type="password" name='cpassword' value={registerCredentials.cpassword} minLength={5} onChange={onChange} className="form-control" placeholder="re-write password" required style={{ fontSize: 12 }} />
                            </div>
                            { registerCredentials.firstName && registerCredentials.lastName && registerCredentials.password && registerCredentials.cpassword && registerCredentials.email && registerCredentials.mobile &&
                                <button type="submit" className="btn btn-info btn-block mt-5" style={{ fontSize: 20 }}>Register</button>
                            }
                            
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register
