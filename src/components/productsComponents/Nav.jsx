import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="flex justify-between items-center mb-10 ">
      <div>
        <NavLink to="/">
          <h1 className="text-5xl font-bold max-sm:text-3xl">Krist</h1>
        </NavLink>
      </div>
      <div>
        <ul className="flex items-center gap-5 font-medium text-xl">
          <NavLink to="/">
            <li>Home</li>
          </NavLink>

          <NavLink to="/products">
            <li>Products</li>
          </NavLink>
        </ul>
      </div>
      <div className="flex gap-5 max-sm:gap-2 items-center">
        <div className="relative">
          <button>
            <span className="material-symbols-outlined">favorite</span>
          </button>
          <button className=" bg-red-600 text-white pb-4  w-3 h-3 rounded-full font-bold text-xs  absolute -right-0.5 -top-3">
            0
          </button>
        </div>

        <div className="relative">
          <NavLink to="/cart">
            <button>
              <span className="material-symbols-outlined">local_mall</span>
            </button>
            <button className=" bg-blue-500 pb-4 text-white  w-3 h-3 rounded-full text-xs font-bold border-black  absolute -right-0.5 -top-3">
              0
            </button>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
