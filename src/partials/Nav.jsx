import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Nav.css";
import { Context } from "../context/MyContextProvider";

const Nav = () => {
  const { user, logOutUser, loader } = useContext(Context);
  console.log(loader)

  return (
    <div className="navbar bg-base-100 mt-5">
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
              <NavLink to="/favourites" className="btn-rn">
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
        {user ? (
          <>
              <>
                <div className="dropdown">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost md:hidden avatar md:tooltip"
                    data-tip={user?.displayName}
                  >
                    <div className="w-6 md:w-10 rounded-full ring ring-green-500 ring-offset-base-100 ring-offset-2">
                      <img
                        className="w-6 h-6 md:w-10 md:h-10"
                        src={user.photoURL}
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
                    className="avatar md:tooltip"
                    data-tip={user?.displayName}
                  >
                    <div className=" w-6 md:w-10 rounded-full ring ring-green-500 ring-offset-base-100 ring-offset-2">
                      <img
                        className="w-6 h-6 md:w-10 md:h-10"
                        src={user?.photoURL}
                      />
                    </div>
                  </div>
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