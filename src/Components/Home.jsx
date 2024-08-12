import axios from "axios";
import { useState } from "react";
import { useEffect } from "react"

const Home = () => {
  const [adminTotal, setAdminTotal] = useState(0);
  const [employeeTotal, setEmployeeTotal] = useState(0);
  const [salaryTotal, setSalaryTotal] = useState(0);
  const [adminRedcors, setAdminRedcors] = useState([]);

  useEffect(() => {
    adminCount();
    employeeCount();
    salaryCount();
    AdminRedcors();
  }, []);

  const AdminRedcors = () => {
    axios.get('http://localhost:3000/auth/admin_records')
      .then(res => {
        if (res.data.Status) {
          setAdminRedcors(res.data.Result);
        } else {
          alert(res.data.Message);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  const adminCount = () => {
    axios.get('http://localhost:3000/auth/admin_count')
      .then(res => {
        if (res.data.Status) {
          setAdminTotal(res.data.Result);
        } else {
          alert(res.data.Message);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  const employeeCount = () => {
    axios.get('http://localhost:3000/auth/employee_count')
      .then(res => {
        if (res.data.Status) {
          setEmployeeTotal(res.data.Result);
        } else {
          alert(res.data.Message);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  const salaryCount = () => {
    axios.get('http://localhost:3000/auth/salary_count')
      .then(res => {
        if (res.data.Status) {
          setSalaryTotal(res.data.Result);
        } else {
          alert(res.data.Message);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <div>
      <div className="p-3 d-flex justify-content-around mt-3">
        <div className="px-3 pt-2 pb-2 border shadow-sm w-25">
          <div className="text-center pb-1">
            <h4>Admin</h4>
          </div>
          <hr />
          <div className="d-flex justify-content-around ">
            <h5 >Total:</h5>
            <h5>{adminTotal}</h5>
          </div>
        </div>
        <div className="px-3 pt-2 pb-2 border shadow-sm w-25">
          <div className="text-center pb-1">
            <h5>Employee</h5>
          </div>
          <hr />
          <div className="d-flex justify-content-around ">
            <h5>Total:</h5>
            <h5>{employeeTotal}</h5>
          </div>
        </div>
        <div className="px-3 pt-2 pb-2 border shadow-sm w-25">
          <div className="text-center pb-1">
            <h5>Salary</h5>
          </div>
          <hr />
          <div className="d-flex justify-content-around ">
            <h5>Total:</h5>
            <h5>{salaryTotal}</h5>
          </div>
        </div>
      </div>
      <div className="mt-4 px-5 pt3">
        <h3>List of Admins</h3>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              adminRedcors.map(a =>(
                <tr key={a.id}>
                  <td>{a.email}</td>
                  <td>
                    <button className="btn btn-info btn-sm me-2" >Edit</button>
                    <button className="btn btn-danger btn-sm">Delete</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Home