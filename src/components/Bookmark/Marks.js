import React,{useContext} from "react";

import MarkList from "./MarkList";
import BookmarkContext from '../store/bookmark-context';

const Mark = (props)=>{
    const bookmarkCtx = useContext(BookmarkContext);
    const marks = bookmarkCtx.bookmark;

    const onEditHandler = (key)=>{
        props.onEditClick(key)
    }
    return (
        <div>
            <h2>All Bookmarks</h2>
            <ul>
                <MarkList marks={marks} onEdit={onEditHandler}/>
            </ul>
        </div>
    )
}

export default Mark;