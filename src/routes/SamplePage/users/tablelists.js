import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, Popover } from "antd";
function Tablelists({needtable}) {
    const dispatch = useDispatch();
    
    const getorganizations = useSelector(({ auth }) => auth.getorganizations);
    const process = e =>{
         
        let abc = e.target.getAttribute(`data-type`) == `1` || e.target.getAttribute(`data-type`) == `2` ? needtable(false,e.target.getAttribute(`data-id`)) : ``
    }
    let table = [
        (
            <tr>
                <th>Company Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Branches</th>
                <th>Subscribe Date</th>
                <th>Expiry Date</th>
                <th>Package</th>
                <th>Status</th>
                <th>Action</th>
            </tr>
        )
    ]
    let row = []
    getorganizations.map((item, i) => {
        let tr = []
        tr.push(
            <td>{item.name}</td>,
            <td>{item.email}</td>,
            <td>{item.address}</td>,
            <td>{item.mobile_no}</td>,
            <td>{3}</td>,
            <td>{item.valid_from}</td>,
            <td>{item.valid_to}</td>,
            <td>{item.subscriptionPackage.name}</td>,
            <td>{item.status == 1 ? (<div className={`active_status`}>
                Active
            </div>) : (
                    <div className={`inactive_status`}>
                        Inactive
                    </div>
                )}
            </td>,

        )
        let userMenuOptions = (
            <ul style={{ listStyle: `none` }}>
                <li data-id={item.id} data-type={item.company_type} onClick={process}>Edit</li>
                <li >Delete</li>
            </ul>
        )
        let trtag = (
            <tr>
                {tr}
                <td>
<Popover  overlayClassName={`table_popover`} content={userMenuOptions} trigger="click">         

                        <div className={`the_pin`}>
                            <img src={`/images/Component1.png`}></img>
                        </div>
                        </Popover>
                </td>
            </tr>
        )
        table.push(trtag)
        return
    })
    return (
        <div className={`table_common`}>
            <div className={`table_heading`}>
                List of Company
            </div>
            <div className={`table_body`}>
                <table className={`the_table`}>
                    {table}
                    {/* <tr>
                        <td>Company Name</td>
                        <td>Email</td>
                        <td>Address</td>
                        <td>Phone</td>
                        <td>Branches</td>
                        <td>Subscribe Date</td>
                        <td>Expiry Date</td>
                        <td>Package</td>
                        <td><div className={`active_status`}>
                            Active
                            </div></td>
                        <td><div className={`pin_option`}>

                            <div className={`the_pin`}>
                                <img src={`/images/Component1.png`}></img>
                            </div> */}
                    {/* <div className={`the_option`}>
                                <div>
                                    Edit
                                </div>
                                <div>
                                    Delete    
                                </div>
                            </div> */}
                    {/* </div></td>
                    </tr>
                    <tr>
                        <td>Company Name</td>
                        <td>Email</td>
                        <td>Address</td>
                        <td>Phone</td>
                        <td>Branches</td>
                        <td>Subscribe Date</td>
                        <td>Expiry Date</td>
                        <td>Package</td>
                        <td><div className={`inactive_status`}>
                            Inactive
                            </div></td>
                        <td><div className={`pin_option`}>

                            <div className={`the_pin`}>
                                <img src={`/images/Component1.png`}></img>
                            </div> */}
                    {/* <div className={`the_option`}>
                                <div>
                                    Edit
                                </div>
                                <div>
                                    Delete    
                                </div>
                            </div> */}
                    {/* </div></td>
                    </tr> */}
                </table>
            </div>
        </div>
    )
}
export default Tablelists;