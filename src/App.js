import React,{useState} from "react";

import Header from "./components/Layouts/Header";
import Mark from "./components/Bookmark/Marks";
import AddMark from "./components/Bookmark/AddMark";
import BookmarkProvider from "./components/store/BookmarkProvider";


function App() {
  const [isAddOpne ,setIsAddOpne] = useState(false);
  const [editId , setEditId] = useState();
  const closeAddMarkHandler = ()=>{
    setIsAddOpne(false)
    setEditId()
  }
  const opneAddMarkHandler = ()=>{
    setIsAddOpne(true)
  }

  const editClickHandler = (key)=>{
    setIsAddOpne(true)
    setEditId(key)
  }
  return (
    <BookmarkProvider>
      <Header onAdd={opneAddMarkHandler}/>
      {isAddOpne && <AddMark onClose={closeAddMarkHandler} id={editId}/>}
      <Mark onEditClick={editClickHandler}/>
    </BookmarkProvider>
  );
}

export default App;
