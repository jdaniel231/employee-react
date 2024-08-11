import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    name: '',
    email: '',
    password: '',
    salary: '',
    address: '',
    image: null,
    category_id: ''
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
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', employee.name);
    formData.append('email', employee.email);
    formData.append('password', employee.password);
    formData.append('salary', employee.salary);
    formData.append('address', employee.address);
    if (employee.image) formData.append('image', employee.image);
    formData.append('category_id', employee.category_id);

    // Log FormData entries
    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }

    axios.post('http://localhost:3000/auth/add_employee', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(res => {
      if (res.data.Status) {
        navigate('/dashboard/employee');
      } else {
        alert(res.data.Message);
      }
    })
    .catch(err => {
      console.log(err);
    });
  };

  return (
    <div className="d-flex justify-content-center align-items-center h-75">
      <div className="p-3 rounded- w-25 border ">
        <h2>Add Employee</h2>
        <form className="row g-1" onSubmit={handleSubmit}>
          <div className='col-12'>
            <label htmlFor="inputName"><strong>Name:</strong></label>
            <input type="text"
              id="inputName"
              placeholder="Enter name"
              className='form-control rounded-0'
              name="name"
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
              onChange={(e) => setEmployee({...employee, email: e.target.value})}
              required
            />
          </div>
          <div className='col-12'>
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
          </div>
          <div className='col-12'>
            <label htmlFor="inputSalary"><strong>Salary:</strong></label>
            <input type="number"
              id="inputSalary"
              placeholder="Enter salary"
              className='form-control rounded-0'
              name="salary"
              autoComplete="off"
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
              onChange={(e) => setEmployee({...employee, address: e.target.value})}
              required
            />
          </div>
          <div className='col-12'>
            <label htmlFor="inputGroupFile01"><strong>Select Image:</strong></label>
            <input type="file"
              id="inputGroupFile01"
              className='form-control rounded-0'
              name="image"
              onChange={(e) => setEmployee({...employee, image: e.target.files[0]})}
            />
          </div>
          <div className='col-12'>
            <label htmlFor="category"><strong>Category:</strong></label>
            <select
              className="form-select rounded-0"
              aria-label="Default select example"
              name="category_id"
              id="category"
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
            <button type="submit" className="btn btn-success rounded-0 w-100 mb-2">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddEmployee;
