import { Link, Outlet, useLocation } from 'react-router-dom';
import "bootstrap-icons/font/bootstrap-icons.css";

const Dashboard = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <div className="d-flex">
      <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark" style={{ width: "280px", height: "100vh" }}>
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
          <i className="bi bi-bootstrap-fill me-2" style={{ fontSize: "1.5rem" }}></i>
          <span className="fs-4">Code With Yousof</span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <Link to="/dashboard" className={`nav-link ${pathname === '/dashboard' ? 'active' : 'text-white'}`}>
              <i className="bi bi-house-door me-2"></i>
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/dashboard/employee" className={`nav-link ${pathname === '/dashboard/employee' ? 'active' : 'text-white'}`}>
              <i className="bi bi-people-fill me-2"></i>
              Manage Employees
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/dashboard/category" className={`nav-link ${pathname === '/dashboard/category' ? 'active' : 'text-white'}`}>
              <i className="bi bi-window-dock me-2"></i>
              Category
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/dashboard/profile" className={`nav-link ${pathname === '/dashboard/profile' ? 'active' : 'text-white'}`}>
              <i className="bi bi-person me-2"></i>
              Profile
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/customers" className="nav-link text-white">
              <i className="bi bi-box-arrow-right me-2"></i>
              Logout
            </Link>
          </li>
        </ul>
      </div>
      <div className="p-0 col m-0" style={{ flexGrow: 1 }}>
        <div className='p-2 d-flex justify-content-center shadow'>
          <h4>Employee Management System</h4>
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
