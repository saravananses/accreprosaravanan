import React from "react";
import {Avatar, Popover} from "antd";
import { userSignOut } from "../appRedux/actions/Auth";
import { useDispatch, useSelector } from "react-redux";
function Right(){
    const dispatch = useDispatch();    
let userMenuOptions = (
    <ul style={{listStyle : `none`}}>
    <li onClick={()=>{
        dispatch(userSignOut())
    }}>Logout</li>
    </ul>
)
return(
    <div class={`accrepro_header_right`}>
        <div class={`accrepro_header_right_left`}>
            <div >Welcome !</div>
            <div>giri@gmail.com</div>
        </div>
        <div class={`accrepro_header_right_right`}>
        <Popover  placement="bottomRight" content={userMenuOptions} trigger="click">
        <Avatar src='https://via.placeholder.com/150x150'
                 alt=""/>
                 </Popover>
        </div>
    </div>
)

}
export default Right