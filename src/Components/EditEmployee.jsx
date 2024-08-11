import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditEmployee = () => {

  const {id} = useParams();
  const [employee, setEmployee] = useState({
    name: '',
    email: '',
    salary: '',
    address: '',
  });
  const [category, setCategory] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3000/auth/category')
      .then(res => {
        if (res.data.Status) {
          setCategory(res.data.Result);
        } else {
          alert(res.data.Message);
        }
      })
      .catch(err => {
        console.log(err);
      });

    axios.get(`http://localhost:3000/auth/employee/${id}`)
      .then(res => {
        if (res.data.Status) {
          const result = res.data.Result;
          setEmployee({
            name: result.name,
            email: result.email,
            salary: result.salary,
            address: result.address,
            category_id: result.category_id
          });
        } else {
          alert(res.data.Message);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }, [id]);


  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3000/auth/edit_employee/${id}`, employee)
      .then(res => {
        if (res.data.Status) {
          alert('Employee updated successfully');
          navigate('/dashboard/employee');
        } else {
          alert(res.data.Message);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <div className="d-flex justify-content-center align-items-center h-75">
      <div className="p-3 rounded- w-25 border ">
        <h2>Edit Employee</h2>
        <form className="row g-1" onSubmit={handleSubmit}>
          <div className='col-12'>
            <label htmlFor="inputName"><strong>Name:</strong></label>
            <input type="text"
              id="inputName"
              placeholder="Enter name"
              className='form-control rounded-0'
              name="name"
              value={employee.name}
              onChange={(e) => setEmployee({...employee, name: e.target.value})}
              required
            />
          </div>
          <div className='col-12'>
            <label htmlFor="inputEmail"><strong>Email:</strong></label>
            <input type="email"
              id="inputEmail"
              placeholder="Enter email"
              className='form-control rounded-0'
              name="email"
              autoComplete="off"
              value={employee.email}
              onChange={(e) => setEmployee({...employee, email: e.target.value})}
              required
            />
          </div>
          {/* <div className='col-12'>
            <label htmlFor="inputPassword"><strong>Password:</strong></label>
            <input type="password"
              id="inputPassword"
              placeholder="Enter password"
              className='form-control rounded-0'
              name="password"
              autoComplete="off"
              onChange={(e) => setEmployee({...employee, password: e.target.value})}
              required
            />
          </div> */}
          <div className='col-12'>
            <label htmlFor="inputSalary"><strong>Salary:</strong></label>
            <input type="number"
              id="inputSalary"
              placeholder="Enter salary"
              className='form-control rounded-0'
              name="salary"
              autoComplete="off"
              value={employee.salary}
              onChange={(e) => setEmployee({...employee, salary: e.target.value})}
              required
            />
          </div>
          <div className='col-12'>
            <label htmlFor="inputAddress"><strong>Address:</strong></label>
            <input type="text"
              id="inputAddress"
              placeholder="Enter address"
              className='form-control rounded-0'
              name="address"
              autoComplete="off"
              value={employee.address}
              onChange={(e) => setEmployee({...employee, address: e.target.value})}
              required
            />
          </div>
          {/* <div className='col-12'>
            <label htmlFor="inputGroupFile01"><strong>Select Image:</strong></label>
            <input type="file"
              id="inputGroupFile01"
              className='form-control rounded-0'
              name="image"
              onChange={(e) => setEmployee({...employee, image: e.target.files[0]})}
            />
          </div> */}
          <div className='col-12'>
            <label htmlFor="category"><strong>Category:</strong></label>
            <select
              className="form-select rounded-0"
              aria-label="Default select example"
              name="category_id"
              id="category"
              value={employee.category_id}
              onChange={(e) => setEmployee({...employee, category_id: e.target.value})}
              required
            >
              <option value="">Select Category</option>
              {category.map(c => (
                <option key={c.id} value={c.id}>{c.name}</option>
              ))}
            </select>
          </div>
          <div className='col-12'>
            <button type="submit" className="btn btn-success rounded-0 w-100 mb-2">Edit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditEmployee