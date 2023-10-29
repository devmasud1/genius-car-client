import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../hooks/provide/AuthProvider";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <p>loading....</p>;
  }
  if (user?.email) {
    return children;
  }

  return <Navigate state={location.pathname} to="/logIn" replace></Navigate>;
};
export default PrivateRoutes;
