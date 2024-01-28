import React from "react";

function State1(){
    const user ={

    }
    const [Test,setTest] = useState(user)



// function Call(){
//     console.log('Clicked',a)
// }
return(
    <>
    <h1>{Test}</h1>
    <button onClick={()=>(Test - 500)} >withdraw 500 rupees</button>
    <button onClick={()=>(Test - 500)} >withdraw 500 rupees</button>
    </>
)
}
export default State1