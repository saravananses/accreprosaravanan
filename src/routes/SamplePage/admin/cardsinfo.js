import React from "react";
import { Card, Tabs } from "antd";
function Cardsinfo() {
    return (
        // css name as cardinfo
        <div className={`card_informations`}>
            {/*css name as subscribers*/}
            <div className={`subscribers under_card_informations`}>
                <div className={`information`}>
                    <div className={`card_count`}>
                        100
                    </div>
                    <div className={`card_description`}>
                        No of subscribers
                    </div>
                </div>
                <div className={`for_icon`}>
                    <img src={`/images/Group_880.png`} />
                </div>
            </div>
            {/*css name as hospital*/}
            <div className={`hospital under_card_informations`}>
                <div className={`information`}>
                    <div className={`card_count`}>
                        25
                    </div>
                    <div className={`card_description`}>
                        Subscriber by hospital
                    </div>
                </div>
                <div className={`for_icon`}>
                    <img src={`/images/Group_879.png`} />
                </div>
            </div>
            {/*css name as polyclinic*/}
            <div className={`polyclinic under_card_informations`}>
                <div className={`information`}>
                    <div className={`card_count`}>
                        20
                    </div>
                    <div className={`card_description`}>
                        Subscriber by polyclinic
                    </div>
                </div>
                <div className={`for_icon`}>
                    <img src={`/images/Group_881.png`} />
                </div>
            </div>
            {/*css name as clinic*/}
            <div className={`clinic under_card_informations`}>
                <div className={`information`}>
                    <div className={`card_count`}>
                        23
                    </div>
                    <div className={`card_description`}>
                        Subscriber by clinic
                    </div>
                </div>
                <div className={`for_icon`}>
                    <img src={`/images/Group_860.png`} />
                </div>
            </div>
            {/*css name as phc*/}
            <div className={`phc under_card_informations`}>
                <div className={`information`}>
                    <div className={`card_count`}>
                        35
                    </div>
                    <div className={`card_description`}>
                        Subscriber by PHC
                    </div>
                </div>
                <div className={`for_icon`}>
                    <img src={`/images/Group_877.png`} />
                </div>
            </div>
        </div>
    )
}
export default Cardsinfo;