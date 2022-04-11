import React from "react";
import './SearchBox.css'
const SearchBox=({onInputChange})=>{
    return(
        <>
        <div className="search-box">
            <input onChange={(e)=>onInputChange(e.target.value)} placeholder="Search Keywords" className="search-inp"/>
        </div>
        </>
    )
}
export default SearchBox;