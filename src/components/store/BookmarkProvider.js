import React,{useState} from "react";
import BookmarkContext from "./bookmark-context";

const BookmarkProvider = (props)=>{
    const [bookmark, setBookmark] = useState([]);
    
    const addBookmarkHandler = (newBookmark)=>{
        setBookmark([...bookmark,newBookmark])
    }
    const removeBookmarkHandler = (id)=>{
        let filterdBookmark = bookmark.filter((i)=>{
            return i.id !== id
        })
        setBookmark([...filterdBookmark]);
    }

    const editBookmarkHandler = (editMark)=>{
        console.log(editMark)
        const getMark = bookmark.find((mark)=>mark.id === editMark.id-1)
        getMark.name = editMark.name;
        getMark.url = editMark.url;
    }
    const findBookmarkHandler = (id)=>{
        return bookmark.find(mark=>mark.id === id-1);
    }
    const bookmarkContext = {
        bookmark:bookmark,
        addBookmark:addBookmarkHandler,
        removeBookmark:removeBookmarkHandler,
        editBookmark:editBookmarkHandler,
        findBookmark:findBookmarkHandler
    }
    


    return (<BookmarkContext.Provider value={bookmarkContext}>
                {props.children}
        </BookmarkContext.Provider>)
}

export default BookmarkProvider;