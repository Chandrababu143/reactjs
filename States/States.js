import React  from "react";


function StateSollution(){
    const [Count,setCount] = useState(0);

    function Increment(){
setCount(Count + 1)
    }
    return(
        <>
        <h1>{Count} {Name}</h1>
        <button onClick={()=>setName("babu")}>change</button>
        <button onClick={()=>Increment()}>+</button>
        <button onClick={()=>setCount(Count - 1)}>-</button>
        <button onClick={()=>setCount(0)}></button>



        </>
    );
}