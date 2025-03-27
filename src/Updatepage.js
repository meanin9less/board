import {useState} from "react";
export default function Updatepage(props) {
    const [inputTitle, setinputTitle] = useState(props.readPost.title);
    const [inputBody, setinputBody] = useState(props.readPost.body);
    const [inputWriter, setinputWriter] = useState(props.readPost.writer);
    return (
        <>
            <form name="form" onSubmit={(e)=>{
                e.preventDefault();
                const updatePost = {
                    id: props.readPost.id,
                    title:inputTitle, 
                    body:inputBody, 
                    writer:inputWriter
                }
                props.onSelect("READ", updatePost);
            }}>
                <input type="text" name="inputTitle" value={inputTitle} style={{width: "100%"}} onChange={(e)=>{
                    setinputTitle(e.target.value);
                }}></input>
                <hr></hr>
                <textarea name="inputBody" value={inputBody} style={{width: "100%", height: "500px"}} onChange={(e)=>{
                    setinputBody(e.target.value);
                }}></textarea>
                <hr></hr>
                <input type="text" name="inputWriter" value={inputWriter} style={{width: "100%"}} onChange={(e)=>{
                    setinputWriter(e.target.value);
                }}></input>
                <hr></hr>
                <button type="submit" name="btn">글쓰기</button>
            </form>
        </>
    )
}