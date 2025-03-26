export default function Writepage(props) {
    const newList = props.postList;

    return (
        <>
            <form name="form" onSubmit={(e)=>{
                e.preventDefault();
                const newPost = {
                    title:e.target.inputTitle, 
                    body:e.target.inputBody, 
                    writer:e.target.inputWriter
                }
                newList.push(newPost);
                props.onSelect("LIST", newList);
            }}>
                <input type="text" name="inputTitle" value="" onChange={(e)=>{
                    
                }}></input>
                <hr></hr>
                <textarea name="inputBody" value="" onChange={(e)=>{
                    
                }}></textarea>
                <hr></hr>
                <input type="text" name="inputWriter" value="" onChange={(e)=>{
                    
                }}></input>
                <hr></hr>
                <button type="submit" name="btn">글쓰기</button>
            </form>
        </>
    )
}