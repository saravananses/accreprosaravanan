import React, { useEffect,useState } from "react";
import Managecompany from "./manage_company";
import Manageusers from "./manage_users";
import Allusers from "./all_users"
function Tabcontents({type}){

    return(
<div className={`tab_inner_contents`}>
{type == 0 ? <Managecompany/> : ''}
{
    type == 1 ? <Manageusers/> : ''
}
{
    type == 2 ? <Allusers/> : ''
}
</div>
    )
}
export default Tabcontents;