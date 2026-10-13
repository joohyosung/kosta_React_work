import React,{useMemo, useState} from 'react'

function Ex03_Memo() {
   const [list, setList ] = useState([1,2,3,4,5]);
   const [age , setAge] = useState(0);
   /*const getSumResult = ()=>{
        console.log("getSumResult call....")
         let sum=0;
        list.forEach((no)=>{
            sum+=no;
        });
        return sum;
    }*/

    ////getSumResult함수를 useMemo로 변경해보자////////////////////////    
    const memoResult = useMemo(()=>{
         console.log("getSumResult call....")
         let sum=0;
        list.forEach((no)=>{
            sum+=no;
        });
        return sum;
     },[list]);


  return (
    <>
      <div>useMemo Test</div>
      {
        list.map((no, i)=><h5 key={i}>{no}</h5>)
      }
      {/* <h3>합계 :{getSumResult()} </h3> */}
      <h3>합계 :{ memoResult } </h3>
      <button onClick={()=>setList([...list, 10])}>클릭(추가)</button>
      <hr/>
      <h3>나이 : {age}</h3>    
      <button onClick={()=>setAge(age+1)}>나이클릭</button>
    </>
    

  )
}

export default Ex03_Memo