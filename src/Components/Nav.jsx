import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-lg">
        <NavLink to="/" className={({isActive}) => isActive? 'text-nav p-2 font-medium' : 'text-nav2 p-2'}>Home</NavLink>
        <NavLink to="/allTouristsSpot" className={({isActive}) => isActive? 'text-nav p-2 font-medium' : 'text-nav2 p-2'}>All Tourists Spot</NavLink>
        <NavLink to="/addTouristsSpot" className={({isActive}) => isActive? 'text-nav p-2 font-medium' : 'text-nav2 p-2'}>Add Tourists Spot</NavLink>
        <NavLink to="/myList" className={({isActive}) => isActive? 'text-nav p-2 font-medium' : 'text-nav2 p-2'}>My List</NavLink>
      </ul>
    </div>
    <a className="btn btn-ghost text-3xl font-bold text-nav">Tourism</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-lg">
    <NavLink to="/" className={({isActive}) => isActive? 'text-nav p-2 font-medium' : 'text-nav2 p-2'}>Home</NavLink>
        <NavLink to="/allTouristsSpot" className={({isActive}) => isActive? 'text-nav p-2 font-medium' : 'text-nav2 p-2'}>All Tourists Spot</NavLink>
        <NavLink to="/addTouristsSpot" className={({isActive}) => isActive? 'text-nav p-2 font-medium' : 'text-nav2 p-2'}>Add Tourists Spot</NavLink>
        <NavLink to="/myList" className={({isActive}) => isActive? 'text-nav p-2 font-medium' : 'text-nav2 p-2'}>My List</NavLink>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Login</a>
  </div>
</div>
    );
};

export default Nav;