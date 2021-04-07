import React, { useEffect, useState } from "react";
import { Card, Tabs, Button } from "antd";
function UserLicense() {
    return (
        <div className={`user_license`}>
            <Card className="gx-card graph_card userlisence">
                <div className={`graph_head`}>
                    <div className={`graph_head_left`}>User License Renewal </div>
                </div>
                <div className={`compliance_body user_license_body`}>
                    <table className={`the_table`}>
                        <tr>
                            <th>Username</th>
                            <th>Company</th>
                            <th>Renewal Date</th>
                            <th>Package</th>
                        </tr>
                        <tr>
                            <td>testing</td>
                            <td>testing</td>
                            <td>testing</td>
                            <td>testing</td>
                        </tr>
                        <tr>
                            <td>testing</td>
                            <td>testing</td>
                            <td>testing</td>
                            <td>testing</td>
                        </tr>
                        <tr>
                            <td>testing</td>
                            <td>testing</td>
                            <td>testing</td>
                            <td>testing</td>
                        </tr>
                        <tr>
                            <td>testing</td>
                            <td>testing</td>
                            <td>testing</td>
                            <td>testing</td>
                        </tr>

                    </table>
                </div>
            </Card>
        </div>
    )
}
export default UserLicense;