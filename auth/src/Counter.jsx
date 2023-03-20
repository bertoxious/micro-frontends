import React, {useState} from "react";

export default()=>{
    const [count, setCount] = useState(0);
    return(
        <div>
            <div>You clicked {count} times</div>
            <button onClick={()=> setCount(count +1)}>Tap</button>
        </div>
    )
}