import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Components/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './Components/Dashboard';
import Home from './Components/Home';
import Employee from './Components/Employee.jsx';
import Profile from './Components/Profile.jsx';
import Category from './Components/Category.jsx';
import AddCategory from './Components/AddCategory.jsx';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/adminlogin" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Home />}></Route>
          <Route path='employee' element={<Employee />}></Route>
          <Route path='category' element={<Category />}></Route>
          <Route path='add_category' element={<AddCategory/>}></Route>
          <Route path='profile' element={<Profile />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
