export default function Readpage(props){

    return(
        <>
        <p>제목 : {props.readPost.title}</p>
        <hr></hr>
        <p>{props.readPost.body}</p>
        <hr></hr>
        <p>작성자 : {props.readPost.writer}</p>
        <hr></hr>
        <a href="/" style={{marginRight:"7px", padding:"1px, 3px", border:"1px, solid, #000", backgroundColor:"#ddd", borderRadius:"4px"}} onClick={(e)=>{
            e.preventDefault();
            props.onSelect("UPDATE", props.readPost.id);
        }}>수정</a>
        <a href="/" style={{marginRight:"7px", padding:"1px, 3px", border:"1px, solid, #000", backgroundColor:"#ddd", borderRadius:"4px"}} onClick={(e)=>{
            e.preventDefault();
            props.onSelect("DELETE", props.readPost.id);
        }}>삭제</a>
        </>
    )
}