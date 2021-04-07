import React, { useEffect, useState } from "react";
import { Card, Tabs,Button } from "antd";
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
function Compliance() {
    const data = [
        { name: 'Page A', uv: 4000, price: 2400, amt: 2400 },
        { name: 'Page B', uv: 3000, price: 1398, amt: 2210 },
        { name: 'Page C', uv: 2000, price: 9800, amt: 2290 },
        { name: 'Page D', uv: 2780, price: 3908, amt: 2000 },
        { name: 'Page E', uv: 1890, price: 4800, amt: 2181 },
        { name: 'Page F', uv: 2390, price: 3800, amt: 2500 },
        { name: 'Page G', uv: 3490, price: 4300, amt: 2100 },
        { name: 'Page H', uv: 3490, price: 4300, amt: 300 },
        { name: 'Page I', uv: 3490, price: 4300, amt: 400 },
        { name: 'Page J', uv: 3490, price: 4300, amt: 1000 },
        { name: 'Page K', uv: 3490, price: 4300, amt: 1500 },
        { name: 'Page l', uv: 3490, price: 4300, amt: 2000 },
        { name: 'Page m', uv: 3490, price: 4300, amt: 5000 },
        { name: 'Page n', uv: 3490, price: 4300, amt: 10000 },
        { name: 'Page o', uv: 3490, price: 4300, amt: 1000 },
        { name: 'Page p', uv: 3490, price: 4300, amt: 2000 },
    ];
    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div className="custom-tooltip" style={{ backgroundColor: `#043353`, padding: '10px' }}>
                    <div style={{ display: 'flex', color: 'white', fontSize: `12px` }}>
                        <div>subscriber :</div>
                        <div>{label}</div>
                    </div>
                    <div style={{ textAlign: `center`, fontSize: `16px`, color: `white` }}>
                        {payload[0].value}
                    </div>
                    <div style={{ fontSize: `12px`, color: 'white' }}>
                        compliance score
              </div>
                </div>
            );
        }

        return null;
    };
    return (
        <div className={`compliance`}>
            <Card className="gx-card graph_card">
                <div className={`graph_head`}>
                    <div className={`graph_head_left`}>Compliance of Each Chapter </div>
                    <div className={`graph_head_right`}>
                        <Button>Filter</Button>
                    </div>
                </div>
                <div className={`graph_part`}>
                    <ResponsiveContainer width="100%" height={210}>
                        <BarChart data={data}
                            margin={{ top: 10, right: 0, left: -15, bottom: 0 }}>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <CartesianGrid strokeDasharray="3 3" />
                            <Tooltip content={<CustomTooltip />} />
                            {/* <Legend /> */}
                            <Bar dataKey="price" fill="#18a4e0" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </Card>
        </div>
    )
}
export default Compliance;