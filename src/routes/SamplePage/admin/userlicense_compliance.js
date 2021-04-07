import React, { useEffect, useState } from "react";
import UserLicense from "./userlicense";
import Compliance from "./compliance" 
function UserCompliance() {
  return (
    <div className={`userlicense_complaince`}>
        <UserLicense/>
        <Compliance/>
    </div>
  )
}
export default UserCompliance;