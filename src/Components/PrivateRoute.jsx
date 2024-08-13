import PropTypes from 'prop-types';

const PrivateRoute = ({ children }) => {
  if (!localStorage.getItem('valid')) {
    window.location.href = '/'; 
    return null; 
  }

  return children; 
}

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired, 
};

export default PrivateRoute;
