import Child01 from "./Child01";
import {useState, createContext, useEffect} from "react";


//모든 현재컴포넌트 하위에 있는 컴포넌트들이 사용 할수 있도록 내보내기
export const GlobalContext = createContext();

const Context01 = () => {

    useEffect(()=>{
        console.log(GlobalContext);
    })

    const [list , setList] = useState([
    {id:1,name:"희정"},
    {id:2,name:"나영"},
    {id:3,name:"효리"}
    ]);

    const btnClick01 = ()=>{
       console.log("btnClick01 호출됨...")
    }

    const btnClick02 = ()=>{
       console.log("btnClick02 호출됨...")
    }

    return (
        <GlobalContext value={{list, setList:setList , btnClick01:btnClick01 , btnClick02}}>
           <div style={{border:"1px red solid" , padding:"10px"}}>
            <h1>useContext TEST</h1>
            <h3 onClick={btnClick01}>클릭</h3>
            {
              list.map( (user)=> <div key={user.id}> {user.id} : {user.name} </div>)
            }
            <Child01 />
           </div>
        </GlobalContext>
        
    );
};

export default Context01;