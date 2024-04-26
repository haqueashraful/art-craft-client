import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "./Loading";
import PropTypes from "prop-types";
import { Context } from "../context/MyContextProvider";

const PrivateRoute = ({ children }) => {
  const {user, stateLoader } = useContext(Context);
  const location = useLocation();

  console.log(stateLoader);

  if (stateLoader) {
    return <Loading />;
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={location.pathname} replace />;
};

PrivateRoute.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PrivateRoute;