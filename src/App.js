import { Route, Switch } from 'react-router';
import Home from './components/home/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Login from './login/Login';
import Register from './register/Register';
import './App.css';
import ForgetPassword from './forget-password/ForgetPassword';
import HomeTwo from './components/HomeTwo';
import Profile from './profile/Profile';

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route  path='/about' component={About}></Route>
        <Route  path='/contact' component={Contact}></Route>
        <Route  path='/login' component={Login}></Route>
        <Route  path='/register' component={Register}></Route>
        <Route  path='/forgetpassword' component={ForgetPassword}></Route>
        <Route  path='/bookride' component={HomeTwo}></Route>
        <Route  path='/profile' component={Profile}></Route>
      </Switch>
    </>
  );
}

export default App;
