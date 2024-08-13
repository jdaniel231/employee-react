import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './style.css';

const EmployeeLogin = () => {

  const [values, setValues] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

   axios.post('http://localhost:3000/employee/employee_login', values)
      .then(res => {
        if (res.data.loginStatus) {
          localStorage.setItem('valid', true);
          navigate('/employee_details/'+res.data.id);
        } else {
          setError(res.data.message || 'Invalid Credentials');
        }
      })
      .catch(err => {
        console.log(err);
        setError('An unexpected error occurred. Please try again.');
      });
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 loginPage">
      <div className="p-3 rounded- w-25 border loginForm">
        <div className='text-danger'>{error}</div>
        <h2>Login Page</h2>
        <form onSubmit={handleSubmit} className="mt-5">
          <div className='mb-3'>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email"  autoComplete="off" placeholder="Enter your email" 
              onChange={(e) => setValues({ ...values, email: e.target.value })} className='form-control rounded-0'/>
          </div>
          <div className='mb-3'>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Enter your password" 
              onChange={(e) => setValues({ ...values, password: e.target.value })} className="form-control rounded-0" />
          </div>
          <div>
            <button type="submit" className="btn btn-success rounded-0 w-100 mb-2">Login</button>
          </div>
          <div className='mb-1'>
            <input type="checkbox" id="tick" name="tick" className="me-2" />
            <label htmlFor="remember" className="form-check-label">You are Agree with terms & conditions</label>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EmployeeLogin