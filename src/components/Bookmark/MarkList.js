import React,{useContext} from "react";

import classes from './MarkList.module.css';
import Button from "../Layouts/Button";
import BookmarkContext from '../store/bookmark-context'

const MarkList = (props)=>{
    const bookmarkCtx = useContext(BookmarkContext);
    const editHandler =(key)=> {
        return ()=>{
            props.onEdit(key)
        }
    }
    const deleteClickHandler = (key)=>{
        return ()=>{
            bookmarkCtx.removeBookmark(key)
        }
    }
    return (
        props.marks.map((mark ,i)=>{
            return <li key={i+1} className={classes.list}><h3>{mark.name}</h3> -
            <h3>{mark.url}</h3>
                <Button name={'Delete'} onClick={deleteClickHandler(i)}/>
                <Button name={'Edit'} onClick={editHandler(i+1)}/>
            </li>
        })
        
    )
}

export default MarkList;