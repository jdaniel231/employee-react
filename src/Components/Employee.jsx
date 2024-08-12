import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"

const Employee = () => {

  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/auth/employee')
      .then(res => {
        console.log(res.data.Result); // Adicione isso para depuração
        if (res.data.Status) {
          setEmployee(res.data.Result);
        } else {
          alert(res.data.Message);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/auth/delete_employee/${id}`)
      .then(res => {
        if (res.data.Status) {
          alert('Employee deleted successfully');
          window.location.reload();
        } else {
          alert(res.data.Message);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
  return (
    <div className="px-5 mt-5">
      <div className="d-flex justify-content-center">
        <h3>Category List</h3>
      </div>
      <Link to="/dashboard/add_employee" className="btn btn-success" >Add Employee</Link>
      <div className="mt-3">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Name</th>
              <th>Image</th>
              <th>Email</th>
              <th>Salary</th>
              <th>Address</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {employee.map(e => (
              <tr key={e.id} >
                <td >{e.name}</td>
                <td><img src={`http://localhost:3000/images/${e.image}`} className="employee_image" alt="Employee" />
                </td>
                <td>{e.email}</td>
                <td >{e.salary}</td>
                <td >{e.address}</td>
                <td >{e.category_name}</td>
                <td>
                  <Link to={`/dashboard/edit_employee/`+e.id}  className="btn btn-info btn-sm me-2" >Edit</Link>
                  <button  className="btn btn-warning btn-sm " onClick={() => handleDelete(e.id)} >Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Employee