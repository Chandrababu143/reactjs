import React from "react";
import Event from "../Events/Event";
import Module from "../module";


function ConRender({num}){
    let res = num === 1? <event/> : <module/>;

    return <>{res}</>;
}

export deafult ConRender;