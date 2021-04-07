import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import { Button } from "antd";
import Tablelists from "./tablelists"
import Managecompanypop from "./managecompanypopup"
import {getorganization} from "../../../appRedux/actions/Auth"
function Managecompany() {
    const [showform,setshowform] = useState(0)
    const [showtable,setshowtable] = useState(true)
    const grave = (check) => {
            if(check == 1){
                setshowform(0)
            }        
    }
    const commontable = (e,id) =>{
        if(e == false){
            setshowtable(false)
        }
    }
    const dispatch = useDispatch();
    const getorganizations = useSelector(({auth}) => auth.getorganizations);    
    const processbar = useSelector(({auth}) => auth.processbar);        
    if(getorganizations.length === 0 && getorganizations != 'nodata'){
         if(processbar == 'end')   {
            dispatch(getorganization())
         }

    }
    // alert(getorganizations.length)
    return (
        <div>
            <div className={`bread_crumbs`}>
                <div className={`bread_crumbs_left`}>
                 {showtable ? `Users/Manage Company` : `Users / Manage Company / Maher Company Edit`} 
                </div>
                <div className={`bread_crumbs_right`}>
                    <Button onClick={()=>{
                        setshowform(1)                        
                    }} style={{ width: '150px' }} type="primary" className="gx-mb-0 for_addnew" >
                        <i style={{ fontSize: `14px` }} className="icon icon-add" />Add New
                    </Button>
                </div>
            </div>
            {showtable ? <Tablelists needtable={commontable}/> : ''}
            <Managecompanypop active_status={showform} pcback={grave}/>
        </div>
    )
}
export default Managecompany