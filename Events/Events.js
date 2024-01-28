import React from "react";

function Event(){
    function Click(){
        let inputE1 = document.getElementById('one').value 
        console.log(inputE1);
    }
}
return(
    <>
    <input type="text" id="one" onChange={(e)=>click(e.target.value)}/>
    </>
)