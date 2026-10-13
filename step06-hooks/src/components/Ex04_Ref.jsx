import React , {useEffect, useRef} from 'react'

function Ex04_Ref() {
    console.log("Ex04_Ref 랜더링~~~");
    const inputRef = useRef();

    useEffect(()=>{
        console.log(inputRef);
        inputRef.current.focus();//커서놓기
    },[]);

  return (
    <>
      <div>useRef로 Dom접근 쉽게하기 </div>
      <input type='text' ref={inputRef}/>
      <button onClick={()=>{
         alert(`${inputRef.current.value} 입력했어요`)
         inputRef.current.value="";
         inputRef.current.focus();
      }}>클릭</button>
    </>
  )
}

export default Ex04_Ref