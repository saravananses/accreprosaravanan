import React, { useEffect,useState } from "react";
import Library from "./library"
import Chapter from "./chapter"
import Standard from "./standard"
import Substandard from "./substandard"
import Activity from "./activity"
function Tabcontents({type}){

    return(
<div className={`tab_inner_contents`}>
{type == 0 ? <Library/> : ''}
{
    type == 1 ? <Chapter/> : ''
}
{
    type == 2 ? <Standard/> : ''
}
{
    type == 3 ? <Substandard/> : ''
}
{
    type == 4 ? <Activity/> : ''
}
</div>
    )
}
export default Tabcontents;