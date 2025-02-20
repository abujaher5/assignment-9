import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { ResidenceContext } from "../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(ResidenceContext);

  console.log(user);

  const { photoURL, email, displayName } = user || {};

  const handleSignOut = () => {
    logOut()
      .then((result) => console.log(result.user))
      .catch((error) => console.error(error));
  };
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/updateProfile">Update Profile</NavLink>
      </li>
      <li>
        <NavLink to="/userProfile">User Profile</NavLink>
      </li>
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-3"
            >
              {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">ChosePlace</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-3">{navLinks}</ul>
        </div>

        <div className="navbar-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img alt="User Photo" src={photoURL} />
            </div>

            <h2>{email}</h2>
          </div>
          {user ? (
            <button
              onClick={handleSignOut}
              className="btn btn-ghost text-green-600"
            >
              Sign Out
            </button>
          ) : (
            <Link to="/login">
              <button className="btn btn-ghost text-green-600">Login</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
