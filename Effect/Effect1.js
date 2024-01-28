import React, {useEffect} from 'react'
import { useState } from 'react';

function Effect1(){
    const [detail,setDetail] = useState([]);
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then((data) => {
            console.log(data);
            setDetail(data);
        });
    },[]);
    return(
        <>
        {
            detail.map((a,b)=>{
                return(
                    <div className="m-3 p-3 text-centre shadow">
                    <h1>{a.title}</h1>
                    <img src={a.image} alt="loading" style={{height:"200px"}} />
                    <br></br>
                    <del>$1000</del><ins>{a.price}</ins>
                    <p>{a.description}</p>
                    <button className="btn btn-primary">Buy</button>
                    </div>  
                );
            })
        }
        </>
    )
}
export default Effect1
