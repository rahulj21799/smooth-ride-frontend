import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router'
import NavBar from '../components/NavBar'
import { BASE_URL } from '../constant/Constant'
import Spinner from '../components/Spinner'

const Login = () => {

    const [credentials, setCredentials] = useState(
        { 
            username: '', 
            password: ''
        })

    const history = useHistory()

    const login = async (e) => {
        e.preventDefault();
        
            const response = await fetch(`${BASE_URL}/authenticate`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ setCredentials })
            });
            const json = await response.json()
            localStorage.setItem("token", json.id_token);
            history.push("/bookride");
            console.log(json);
       
        
    }


    const onChange = (e) => {
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

    return (
        <>
        <NavBar/>
        <div className='row'>
            <div className='col-6'>
        <div className='container' style={{width: '50%', marginTop: 150, fontSize: 15}}>
            <form onSubmit={login}>
                <h3 style={{margin: 30, textAlign: 'center', fontSize: 50}}><strong>Login</strong></h3>

                <div className="form-group">
                    <label>User Name</label>
                    <input type="text" name='username' value={credentials.username} onChange={onChange} className="form-control" placeholder="Enter email" style={{ fontSize: 15 }}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password"  name='password' value={credentials.password} onChange={onChange} className="form-control" placeholder="Enter password" style={{ fontSize: 15 }}/>
                </div>

                <button type="submit" className="btn btn-success btn-block mt-5" style={{fontSize: 20}}>Login</button>
                <p className="forgot-password text-right mt-5">
                    <Link to='/forgetpassword'  style={{color: 'red'}}>
                    Forgot password?
                    </Link>
                </p>
            </form>
            </div>
        </div>
        <div className='col-6'>
        {/* <h3 style={{margin: 30, textAlign: 'center', fontSize: 50}}><strong>Login</strong></h3> */}
        <img style={{margin: 100}} src='https://5.imimg.com/data5/UN/CT/NF/SELLER-6465078/bmw-car-automatice-components-500x500.png'/>
        </div>
        </div>
        </>
    )
}


export default Login
