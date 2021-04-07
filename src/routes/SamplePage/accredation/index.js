import React from "react";
import {Card,Button} from "antd"; 
import Tabs from "./tabs"
// const TabPane = Tabs.TabPane;
function Dash() {
    return (
        <div className={`accredation_starts`}>
            <div className={`accredation_top_part`}>
                <div className={`accredation_top_part_left`}>
                    <h1 className={`accredation_title`}>Manage Accreditation</h1>
                </div>
                <div className={`accredation_top_part_right`}>
                    <div className="accrepeo_upload upload-btn-wrapper under_accredation_top_part_right">
                        <button class="btnn"><i style={{ fontSize: `16px` }} className="icon icon-add" />Upload CSV</button>
                        <input type="file" name="myfile" />
                    </div>
                    <Button className="accrepeo_download download_samples under_accredation_top_part_right">
                        <div></div>
                        <div>Download Samples</div>
                    </Button>
                </div>
            </div>
            <Tabs />
        </div>
    )
}
export default Dash;