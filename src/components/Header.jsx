import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [showNav, setShowNav] = useState(false);

  return (
    <header className="bg-[#eee5dc] shadow-lg">
      <div className="flex justify-between p-5 w-3/4 mx-auto">
        <Link to="/">
        <h1 className="flex text-xl font-bold">
          <span>JOE</span>
          <span className="text-slate-500">DEV</span>
        </h1>
        </Link>
        <div className="lg:hidden">
          <button
            onClick={() => setShowNav(!showNav)}
            className="text-lg font-medium"
          >
            {showNav ? 'close' : 'Menu'}
          </button>
        </div>
        <ul className={`lg:flex lg:flex-wrap lg:gap-5 lg:text-lg lg:font-medium ${showNav ? 'block' : 'hidden'}`}>
          <Link to="/">
              <li className="hover:underline">AGENCY</li>
          </Link>
          <Link to="/portfolio">
              <li className="hover:underline">PORTFOLIO</li>
          </Link>
          <Link to="/services">
              <li className="hover:underline">SERVICES</li>
          </Link>
          <Link to="/team">
              <li className="hover:underline">TEAM</li>
          </Link>
          <Link to="/contact-us">
              <li className="hover:underline">CONTACT US</li>
          </Link>
        </ul>
      </div>
    </header>
  );

}

export default Header