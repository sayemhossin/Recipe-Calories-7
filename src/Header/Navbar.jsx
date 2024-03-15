import { AiOutlineUserAdd } from "react-icons/ai";

const Navbar = () => {
    return (
        <div className="p-0 md:p-5">
           <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex="0" className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li><a>Home</a></li>
      <li><a>Recipes</a></li>
      <li><a>About</a></li>
      <li><a>Search</a></li>
      </ul>
    </div>
    <a className="btn text-xl btn-ghost font-extrabold md:text-4xl">Recipe Calories</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal font-bold px-1">
      <li><a>Home</a></li>
      <li><a>Recipes</a></li>
      <li><a>About</a></li>
      <li><a>Search</a></li>
    </ul>
  </div>
  <div className="navbar-end ">
 
    <input className="bg-[#dcdbdf]  h-12 rounded-full hidden lg:block p-6 w-60 mr-16
    " type="text" placeholder="Search"/>
    <a className="btn rounded-full text-xl bg-[#0BE58A] hover:bg-[#32bb82]"><AiOutlineUserAdd /></a>
  </div>
</div>
        </div>
    );
};

export default Navbar;