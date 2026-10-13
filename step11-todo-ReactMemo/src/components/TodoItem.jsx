import React ,{memo} from 'react';
import './TodoItem.css';
//function TodoItem({id, isDone, content, date}) {
function TodoItem({id, isDone, content, date, onDelete, onUpdate}) {
console.log("TodoItem ....")
     const onChangeCheckbox=()=>{
       //수정하기(checkbox 상태변경)
       onUpdate(id);
    }

    return (
        <div className="TodoItem">
            <input type="checkbox" checked={isDone} onChange={onChangeCheckbox}/>
            <div className="content">{content}</div>
            <div className="date">{new Date(date).toLocaleString()}</div>
            <button onClick={()=>onDelete(id)}>삭제</button>
        </div>
    );
}

//export default TodoItem;
//export default memo(TodoItem);

//memo의 두번째 콜백함수가 true를 리턴하면 같다, false이면 다르다로 판단한다.
export default  memo(TodoItem,(prevProps, nextProps)=>{ 
    //리턴값에 props가 바뀌었는지 안 바뀌었는지 판단한다. 
    //true -> Props가 바뀌지 않음(리랜더링안됨) 
    //false -> Props 바뀜(리랜더링됨) 
    if(prevProps.id!== nextProps.id)return false; 
    if(prevProps.isDone!== nextProps.isDone)return false; 
    if(prevProps.content!== nextProps.content)return false; 
    if(prevProps.date!== nextProps.date)return false; 
    return true;//리랜더링안됨. 
}); 