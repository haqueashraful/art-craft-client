import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Nav.css";
import { Context } from "../context/MyContextProvider";
import { Tooltip } from "react-tooltip";

const Nav = () => {
  const { user, logOutUser, loader, isChecked, setIsChecked, handleChange } =
    useContext(Context);
  console.log(loader);

  return (
    <div className="navbar bg-base-100 mt-5 lg:px-20 px-5">
      <div className="navbar-start items-center">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
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
            className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-base-100 rounded-box w-44"
          >
            <li>
              <NavLink className="btn-rn" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/allartcraft" className="btn-rn">
                All art & Craft
              </NavLink>
            </li>
            <li>
              <NavLink to="/addcraftitem" className="btn-rn">
                Add Craft Item
              </NavLink>
            </li>
            <li>
              <NavLink to="/myartcraftlist" className="btn-rn">
                My art & Craft list
              </NavLink>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn-rn text-xl">
          Art & Craft
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex gap-5">
          <li>
            <NavLink className="btn-rn" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/allartcraft" className="btn-rn">
              All art & Craft
            </NavLink>
          </li>
          <li>
            <NavLink to="/addcraftitem" className="btn-rn">
              Add Craft Item
            </NavLink>
          </li>
          <li>
            <NavLink to="/myartcraftlist" className="btn-rn">
              My art & Craft list
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-6">
        <label className="swap swap-rotate">
          {/* this hidden checkbox controls the state */}
          <input
            type="checkbox"
            className="theme-controller"
            value="synthwave"
            onChange={handleChange}
          />

          {/* sun icon */}
          <svg
            className="swap-off fill-current w-10 h-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          {/* moon icon */}
          <svg
            className="swap-on fill-current w-10 h-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
        {user ? (
          <>
            <>
              <div className="dropdown">
                <Tooltip id="userTooltip" effect="solid" />
                <div
                  data-tooltip-id="userTooltip"
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost md:hidden avatar"
                  data-tooltip-content={user?.displayName}
                >
                  <div className="w-6 md:w-10 rounded-full ring ring-green-500 ring-offset-base-100 ring-offset-2">
                    <img
                      className="w-6 h-6 md:w-10 md:h-10"
                      src={user.photoURL}
                      alt="User Avatar"
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 -left-12 z-50 p-2 shadow bg-base-100 border border-green-400 rounded-box"
                >
                  <li>
                    <Link onClick={logOutUser}>SignOut</Link>
                  </li>
                </ul>
              </div>
              <div className="hidden md:flex justify-center items-center gap-5">
                <div
                  data-tooltip-id="userTooltip"
                  data-tooltip-content={user?.displayName}
                  className="avatar"
                >
                  <div className=" w-6 md:w-10 rounded-full ring ring-green-500 ring-offset-base-100 ring-offset-2">
                    <img
                      className="w-6 h-6 md:w-10 md:h-10"
                      src={user?.photoURL}
                    />
                  </div>
                </div>
                <Tooltip id="userTooltip" effect="solid" />
                <button onClick={logOutUser} className="btn-rn ">
                  SignOut
                </button>
              </div>
            </>
          </>
        ) : (
          <>
            <NavLink to="/login" className="btn">
              Login
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Nav;
