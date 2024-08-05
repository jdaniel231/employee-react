import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Category = () => {

  const [category, setCategory] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/auth/category')
      .then(res => {
        if(res.data.Status) {
          setCategory(res.data.Result)
        } else {
          alert(res.data.Message)
        }
      })
      .catch(err => {
        console.log(err);
      });
  }, [])

  return (
    <div className="px-5 mt-5">
      <div className="d-flex justify-content-center">
        <h3>Category List</h3>
      </div>
      <Link to="/dashboard/add_category" className="btn btn-success" >Add Category</Link>
      <div className="mt-3">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {category.map(c => (
              <tr key={c.id}>
                <td>{c.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Category