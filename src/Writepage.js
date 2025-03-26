import {useState} from "react";
export default function Writepage(props) {
    const newList = props.postList;
    const [inputTitle, setinputTitle] = useState("");
    const [inputBody, setinputBody] = useState("");
    const [inputWriter, setinputWriter] = useState("");
    return (
        <>
            <form name="form" onSubmit={(e)=>{
                e.preventDefault();
                const newPost = {
                    title:inputTitle, 
                    body:inputBody, 
                    writer:inputWriter
                }
                newList.push(newPost);
                props.onSelect("LIST", newList);
            }}>
                <input type="text" name="inputTitle" value={inputTitle} onChange={(e)=>{
                    setinputTitle(e.target.value);
                }}></input>
                <hr></hr>
                <textarea name="inputBody" value={inputBody} onChange={(e)=>{
                    setinputBody(e.target.value);
                }}></textarea>
                <hr></hr>
                <input type="text" name="inputWriter" value={inputWriter} onChange={(e)=>{
                    setinputWriter(e.target.value);
                }}></input>
                <hr></hr>
                <button type="submit" name="btn">글쓰기</button>
            </form>
        </>
    )
}