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
import AddEmployee from './Components/AddEmployee.jsx';
import EditEmployee from './Components/EditEmployee.jsx';
import Start from './Components/Start.jsx';
import EmployeeLogin from './Components/EmployeeLogin.jsx';
import EmployeeDetails from './Components/EmployeeDetails.jsx';
import PrivateRoute from './Components/PrivateRoute.jsx';


function App() {

  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path="/adminlogin" element={<Login />} />
        <Route path="/employee_login" element={<EmployeeLogin />} />
        <Route path="/employee_details/:id" element={
          <PrivateRoute>
            <EmployeeDetails />
          </PrivateRoute>
        }>
        </Route>
        <Route path="/dashboard" element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }>
          <Route index element={<Home />}></Route>
          <Route path='employee' element={<Employee />}></Route>
          <Route path='add_employee' element={<AddEmployee />}></Route>
          <Route path='edit_employee/:id' element={<EditEmployee />}></Route>
          <Route path='category' element={<Category />}></Route>
          <Route path='add_category' element={<AddCategory/>}></Route>
          <Route path='profile' element={<Profile />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
