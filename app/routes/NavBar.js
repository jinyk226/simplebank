import React from "react";
import { NavLink } from "react-router-dom";

export default () => {
  return (
    <div className='row navbar'>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/accounts">Accounts</NavLink>
    </div>
  )
}
