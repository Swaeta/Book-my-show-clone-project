import React from "react";

//components
import Navbar from "../components/Navbar/Navbar.Component";



const DefaultLayout =(props) =>{

    return (
        <>
        <Navbar/>
        
        {props.children}
        
        </>
    )
}

export default DefaultLayout;