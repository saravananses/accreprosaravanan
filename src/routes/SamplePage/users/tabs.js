import React, { useEffect,useState } from "react";
import Tabcontents from "./tabcontent"

function Tabs (){
        const [for_active_tab,setfor_active_tab] = useState(0)
    return (
      <div>  
      <div className={`tab_custom`}>
          <p onClick={()=>{
              setfor_active_tab(0)
          }} className={`${for_active_tab == 0 ? `tab_custom_content first active` : `tab_custom_content first`}`}>Manage Company<sup className={`tab_counts`}>0</sup></p>
          <p onClick={()=>{
              setfor_active_tab(1)
            }}  className={`${for_active_tab == 1 ? `tab_custom_content active` : `tab_custom_content`}`}> Manage Users<sup className={`tab_counts`}>0</sup></p>
          <p  onClick={()=>{
              setfor_active_tab(2)
            }} className={`${for_active_tab == 2 ? `tab_custom_content active` : `tab_custom_content`}`}>All Users<sup className={`tab_counts`}>0</sup></p>
      </div>
            <Tabcontents type={for_active_tab}/>
      </div>
)
}
export default Tabs;