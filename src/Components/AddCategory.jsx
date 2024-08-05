import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const AddCategory = () => {

  const [category, setCategory] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/auth/add_category', { name: category })
      .then(res => {
        if (res.data.Status) {
          navigate('/dashboard/category');
        } else {
          alert(res.data.message);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <div className="d-flex justify-content-center align-items-center h-75">
      <div className="p-3 rounded- w-25 border ">
        <h2>Add Category</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor="category"><strong>Category:</strong></label>
            <input type="text" id="category" name="category" placeholder="Enter category" 
              onChange={(e) => setCategory(e.target.value)} className='form-control rounded-0'/>
          </div>
          <div>
            <button type="submit" className="btn btn-success rounded-0 w-100 mb-2">Save</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddCategory