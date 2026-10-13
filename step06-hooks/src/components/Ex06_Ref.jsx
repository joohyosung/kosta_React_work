import React ,{useRef, useState} from 'react'

let letNo=0;
function Ex06_Ref() {
    console.log("Ex05_Ref 랜더링....");

    const countRef = useRef(0);

    const [count, setCount] = useState(0);
    
  return (
    <div>
      <h3>useRef vs useState 차이 </h3>
      <p>
        useRef : {countRef.current}
        <button onClick={()=>{countRef.current = countRef.current+1}}>ref Up</button>
      </p>

      <hr/>

      <p>
        useState : {count}
        <button onClick={()=>setCount(count+1)}>state Up</button>
      </p>
       <hr />
        <p>
        let : {letNo}
        <button onClick={()=>letNo = letNo+1}>let Up</button>
      </p>

    </div>
  )
}

export default Ex06_Ref