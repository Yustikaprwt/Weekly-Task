import React from "react";
import { ScaleLoader } from "react-spinners";

const Loading = () => {
    return (
        <>
        <div style={{display: "flex", justifyContent: "center", marginTop: "200px"}}>
            <ScaleLoader
            color="#F47181"/>
        </div>
        </>
    );
};

export default Loading;