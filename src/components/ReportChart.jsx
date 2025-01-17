import React from "react";
import {
    ComposedChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Text,
    Cell
} from "recharts";
import negative from "../assets/images/negative.png";
import positive from "../assets/images/positive.png";
const EmotionChart = () => {
    const positiveSum = 30; // Positive 합계
    const negativeSum = 60; // Negative 합계
    const emotionData = [
        { name: "행복", value: 10, category: "Positive", color: "#FF6FA5" },
        { name: "사랑", value: 20, category: "Positive", color: "#FF6FA5" },
        { name: "놀람", value: 5, category: "Positive", color: "#FF6FA5" },
        { name: "감사", value: 25, category: "Positive", color: "#FF6FA5" },
        { name: "희망", value: 30, category: "Positive", color: "#FF6FA5" },
        { name: "슬픔", value: 10, category: "Negative", color: "#8A72FF" },
        { name: "분노", value: 5, category: "Negative", color: "#8A72FF" },
        { name: "두려움", value: 3, category: "Negative", color: "#8A72FF" },
        { name: "혐오", value: 22, category: "Negative", color: "#8A72FF" },
        { name: "후회", value: 14, category: "Negative", color: "#8A72FF" },
    ];

    return (
        <div style={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <h2 className=" font-SB " style={{ fontWeight: "bold", marginTop: "10px", marginLeft: "15px" }}>감정 그래프</h2>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "0px" }}>
                <div style={{ fontSize: "24px", fontWeight: "bold", color: "#FF6FA5", marginRight: "10px" }}>
                    {positiveSum}
                </div>
                <div style={{ fontSize: "24px", fontWeight: "bold", color: "#8A72FF" }}>
                    {negativeSum}
                </div>
            </div>
            <ResponsiveContainer width="90%" height={150}>
                <ComposedChart data={emotionData} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>

                    <XAxis dataKey="name" tick={{ fontSize: 10 }} interval={0} className=" font-SB" />
                    <YAxis tick={false} axisLine={false} />
                    <Tooltip />
                    <Bar dataKey="value" barSize={30} label={{ position: "top", fill: "#000", fontSize: 12 }}>
                        {emotionData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                    </Bar>
                </ComposedChart>
            </ResponsiveContainer>
            <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
                <div style={{ textAlign: "center", display: "flex" }}>
                    <img
                        src={positive}
                        alt="Positive"
                        style={{ width: "24px", height: "24px" }}
                    />
                    <div style={{ color: "#FF6FA5", fontWeight: "bold" }}>Positive</div>
                </div>
                <div style={{ textAlign: "center", display: "flex" }}>
                    <img
                        src={negative}
                        alt="Negative"
                        style={{ width: "24px", height: "24px" }}
                    />
                    <div style={{ color: "#8A72FF", fontWeight: "bold" }}>Negative</div>
                </div>
            </div>
        </div>
    );
};

export default EmotionChart;
