import './App.css';
import { useState } from 'react'
import Header from './Header';
import Menu from './Menu'
import PostList from './PostList';
import Writepage from './Writepage'
import Readpage from './Readpage'
import Updatepage from './Updatepage';
function App() {
  const [mode, setMode] = useState("LIST");
  const menuList = [
    { id: 1, title: "글쓰기", mode: "WRITE" },
    { id: 2, title: "목록으로", mode: "LIST" }
  ];
  const [postList, setPostList] = useState([
    { id: 1, title: "반갑습니다", writer: "김진아", body: "안녕하세요" },
    { id: 2, title: "뭘봐", writer: "김준홍", body: "안녕하세요" },
    { id: 3, title: "나99대장김준홍인데", writer: "김준홍", body: "안녕하세요" },
    { id: 4, title: "뭘야려", writer: "김준홍", body: "안녕하세요" }
  ]);
  const [id, setId] = useState(0);
  const readPost = postList.find((n)=>n.id===id);
  let content = null;
  switch (mode) {
    case "LIST":
      content = <PostList onSelect={(_mode, _id) => {
        setMode(_mode);
        setId(_id);
      }} postList={postList}></PostList>;
      break;

      case "WRITE":
      content = <Writepage postList={postList} onSelect={(_mode, _newList) => {
        setMode(_mode);
        setPostList(_newList);
      }}></Writepage>;
      break;

      case "READ":
      content = <Readpage readPost = {readPost} onSelect={(_mode) => {
        setMode(_mode);
      }}></Readpage>;
      break;

      case "UPDATE":
      content = <Updatepage readPost = {readPost} onSelect={(_mode, _updatePost) => {
        let updateList = [...postList].map((list)=>{
          if(list.id === _updatePost.id){
            return _updatePost;
          }
          });
        setMode(_mode);
        setPostList(updateList);
      }}></Updatepage>;
      break;
  }
  return (
    <>
      <Header title="Board"></Header>
      <Menu menuList={menuList} onSelect={(_mode) => {
        setMode(_mode);
      }}></Menu>
      {content}
    </>
  );
}

export default App;
