import React from "react";
import Search from "./Search";
import Logo from "./Logo";


function Navbar({children}){
    
    return(
        <nav className="nav-bar">
        <Logo/>
        <Search/>
        {children}
      </nav>
    )
}

export default Navbar;