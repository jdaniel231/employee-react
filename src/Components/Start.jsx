import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Start = () => {

  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3000/verify')
      .then(res => {
        if(res.data.Status) {
          if(res.data.Result.role === 'admin') {
            navigate('/dashboard');
          } else {
           navigate('/employee_details/'+res.data.Result.id);
          }
        }
      })
      .catch(err => {
        console.log(err);
      });
  }, [navigate])


  return (
    <div className="d-flex justify-content-center align-items-center vh-100 loginPage">
      <div className="p-3 rounded- w-25 border loginForm">
        <h2 className="text-center">Login As</h2>
        <div className="d-flex justify-content-between mt-5 mb-2">
          <button type="button" className="btn btn-primary rounded-0" onClick={() => navigate('/adminlogin')}>
            Admin
          </button>
          <button type="button" className="btn btn-success rounded-0" onClick={() => navigate('/employee_login')}>
            Employee
          </button>
        </div>
      </div>
    </div>
  )
}

export default Start