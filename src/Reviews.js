 
import Data from "./data"; 

import { useState } from "react"


function Reviews() {

    const [index, setIndex] = useState(0); 

    const reviewData = Data[index]; 

    const nextData = ()=>{
        if(reviewData === Data[Data.length-1]){
            setIndex(0)
        } else if(reviewData<=0){
         setIndex(0)
        } else {
            setIndex(index+1)
        }
    }

    return(
        <>
        <div>
            <h3>{reviewData.name}</h3>
            <p>{reviewData.job}</p>
            <img src={reviewData.image} alt={reviewData.id} height= {200} width={150} />
            <button onClick={nextData}>next</button>
        </div>
        </>
    )
}

export default Reviews