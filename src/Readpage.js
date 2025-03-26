export default function Readpage(props){

    return(
        <>
        <p>제목 : {props.readPost.title}</p>
        <hr></hr>
        <p>{props.readPost.body}</p>
        <hr></hr>
        <p>{props.readPost.writer}</p>
        <hr></hr>
        <button onClick="{}">수정</button>
        <button onClick="{}">삭제</button>
        </>
    )
}