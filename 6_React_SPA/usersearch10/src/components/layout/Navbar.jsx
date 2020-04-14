import React from "react";
import { Link } from "react-router-dom";

import Button from "@material-ui/core/Button";


const Navbar = () => {
  

  return (
    <>
      <nav className="navbar bg-primary">
        <h1 >
          <Link  to="/">Home Page</Link>
        </h1>
      </nav>

      <div className='btnContaner' >
        <Link to="/search">
          <Button variant="contained" color="primary">
            Search
          </Button>
        </Link>
        <Link to='/userform' >
          <Button variant="contained" color="secondary">
            Sign In
          </Button>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
