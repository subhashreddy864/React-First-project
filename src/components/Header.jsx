import React from "react";

import { Link } from "react-router-dom";
import "../styles/app.scss";
import "../styles/header.scss";
import { HashLink} from "react-router-hash-link";

const Header=()=>{
  return(
   <nav>
       <h1>RaisingStar</h1>
       <main>
        <HashLink to={"/#home"}>Home</HashLink>  {/*  HashLink  package used not to reload the page*/}
        <Link to={"/contact"}>Contact</Link>
        <HashLink to={"/#about"}>About</HashLink>
        <HashLink to={"/#brands"}>Brands</HashLink>
        <Link to={"/services"}>Services</Link>
        <HashLink to={"/categories"}>Category</HashLink>
       </main>
   </nav>
  );
}
export default Header;
