import React, { useEffect,useState } from "react";
import Tabcontents from "./tabcontent"

function Tabs (){
        const [for_active_tab,setfor_active_tab] = useState(0)
    return (
      <div>  
      <div className={`tab_custom`}>
          <p onClick={()=>{
              setfor_active_tab(0)
          }} className={`${for_active_tab == 0 ? `tab_custom_content active` : `tab_custom_content`}`}>Library<sup className={`tab_counts`}>0</sup></p>
          <p onClick={()=>{
              setfor_active_tab(1)
            }}  className={`${for_active_tab == 1 ? `tab_custom_content active` : `tab_custom_content`}`}> Chapter<sup className={`tab_counts`}>0</sup></p>
          <p  onClick={()=>{
              setfor_active_tab(2)
            }} className={`${for_active_tab == 2 ? `tab_custom_content active` : `tab_custom_content`}`}>Standard<sup className={`tab_counts`}>0</sup></p>
            <p  onClick={()=>{
              setfor_active_tab(3)
            }} className={`${for_active_tab == 3 ? `tab_custom_content active` : `tab_custom_content`}`}>Substandard<sup className={`tab_counts`}>0</sup></p>
            <p  onClick={()=>{
              setfor_active_tab(4)
            }} className={`${for_active_tab == 4 ? `tab_custom_content active` : `tab_custom_content`}`}>Activity<sup className={`tab_counts`}>0</sup></p>
      </div>
            <Tabcontents type={for_active_tab}/>
      </div>
)
}
export default Tabs;