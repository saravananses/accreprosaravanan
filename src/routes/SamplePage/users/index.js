import React from "react";
// import {Card, Tabs} from "antd";
import Tabs from "./tabs"
const TabPane = Tabs.TabPane;
function Dash (){
    const callback = (key) => {
        console.log(key);
      }; 
    return (
        <div>
      <h1>Users</h1>
      <Tabs/>
      </div>
)
}
export default Dash;