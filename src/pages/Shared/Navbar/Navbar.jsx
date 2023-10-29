import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../hooks/provide/AuthProvider";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const handleSignOutUser = () => {
    signOutUser();
  };

  const navItem = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
    
      {
        user &&  <li>
        <NavLink to="/booking">My booking</NavLink>
      </li>
      }
     
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100 px-5">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItem}
            </ul>
          </div>
          <p className="normal-case text-2xl font-bold">Genius car</p>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItem}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-8 h-8 rounded-full">
                  {user.photoURL ? (
                    <img src={user.photoURL} />
                  ) : (
                    <img src="https://i.ibb.co/ZJXnP8s/user.png" />
                  )}
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] px-2 py-4 shadow bg-base-200 rounded w-52"
              >
                <li>
                  <a className="justify-between">{user.displayName}</a>
                </li>
                <li>
                  <button onClick={handleSignOutUser}>Logout</button>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/login">
              <button className="px-5 py-1 bg-blue-800 text-white rounded-md font-semibold">
                LogIn
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
