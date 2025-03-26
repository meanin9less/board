export default function Readpage(props){

    return(
        <>
        <p>제목 : {props.readPost.title}</p>
        <hr></hr>
        <p>{props.readPost.body}</p>
        <hr></hr>
        <p>작성자 : {props.readPost.writer}</p>
        <hr></hr>
        <a href="/" onClick={(e)=>{
            e.preventDefault();
            props.onSelect("UPDATE");
        }}>수정</a>
        <a href="/" onClick="{}">삭제</a>
        </>
    )
}