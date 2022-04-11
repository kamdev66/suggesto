import React from "react";
import './Header.css'
const Header=({headerExpanded})=>{
    return(
        <>
        <div className="head-container">
            <img className={`head-img  ${headerExpanded ? 'head-img-expanded' : 'head-img-contracted'}`} src="https://user-images.githubusercontent.com/26179770/106359099-693e3380-6336-11eb-8069-9e36f25de5ca.png" alt="error found" />
            <h1 className="text">Suggesto!</h1>
        </div>
        </>
    )
}
export default Header;