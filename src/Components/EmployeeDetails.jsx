import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EmployeeDetails = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3000/employee/details/${id}`)
      .then(res => {
        if (res.data.Status) {
          setEmployee(res.data.Result);
        } else {
          console.log('Employee not found');
        }
      })
      .catch(err => {
        console.log(err);
      });
  }, [id]);

  const handleLogout = () => {
    axios.get('http://localhost:3000/employee/logout')
      .then(res => {
        if(res.data.Status) {
          localStorage.removeItem('valid');
          window.location.href = '/';
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
  
  if (!employee) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="d-flex p-2 justify-content-center shadow">
        <h4>Employee Management System</h4>
      </div>
      <div className="d-flex justify-content-center flex-column align-items-center mt-3">
        <img 
          src={`http://localhost:3000/images/` + employee.image}  
          alt="Employee" 
          className="emp_det_image" 
        />
        <div className="d-flex align-items-center flex-column mt-5">
          <h3>Name: {employee.name}</h3>
          <h3>Email: {employee.email}</h3>
          <h3>Salary: ${employee.salary}</h3>
        </div>
        <div>
          <button className="btn btn-primary m-2">Edit</button>
          <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </div>
  );
}

export default EmployeeDetails;
