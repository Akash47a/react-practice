import { useState } from "react";

function Course(props) {

    let [perchased,setPerchased]=useState(0)

    function discond(discount){
        console.log(props.name+" buy with "+discount+"% discount")
        setPerchased(discount);
    }

    return (
        <div className="card">
            <img src={props.image} alt="img" />
            <h2>{props.name}</h2>
            <p>{perchased?props.price-(props.price*perchased)/100:props.price}</p>
            <button onClick={()=> {discond(20)}}>discount</button>
            <p>{perchased?props.name+" perchased with "+perchased+"% discount":"buy fast"}</p>
        </div>
    );
}

export default Course;