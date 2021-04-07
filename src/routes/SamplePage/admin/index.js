import React, { useEffect, useState } from "react";
import { Card, Tabs,Select } from "antd";
import Cardsinfo from "./cardsinfo"
import Dashchart from "./dashchart"
import UserCompliance from "./userlicense_compliance"
function Dash() {
  const { Option } = Select;
  const [organization,setorganization] = useState(undefined)
  const [admins,setadmins] = useState(undefined)
  function onorganization (e){
      setorganization(e)
  }
  function onadmin (e) {
      setadmins(e)
  }
  let organizationtype = [<Option key={1} value={1}>Type1</Option>, <Option key={2} value={2}>Type2</Option>, <Option key={3} value={3}>Type3</Option>]
  let admintype = [<Option key={1} value={1}>Super Admin</Option>, <Option key={2} value={2}>Client Admin</Option>, <Option key={3} value={3}>Updater Admin</Option>]
  return (
    <div>
      {/* css named as dashboard */}
      <div className={`dashboard_top`}>
      <div className={`dashboard_title`}>Dashboard</div>
      <div className={`dashboard_right`}>
        <div className={`dashboard_right_first_part`}>
          {/* css named as selectbox */}
        <Select
              className={`organization_column`}
              value={organization}
              onChange={onorganization}
              placeholder="Organization Type"
            >
              {organizationtype}
            </Select>
        </div>
        <div className={`dashboard_right_second_part`}>
        <Select
              value={admins}
              onChange={onadmin}
              placeholder="Admin Type"
              className={`admin_column`}
            >
              {admintype}
            </Select>
        </div>
      </div>
      </div>
      <Cardsinfo />
      <Dashchart />
      <UserCompliance />
    </div>
  )
}
export default Dash;