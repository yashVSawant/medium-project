import React,{useContext ,useState ,useEffect} from "react";

import classes from './AddMark.module.css';
import Modal from "../UI/Modal";
import BookmarkContext from '../store/bookmark-context';
import Button from "../Layouts/Button";

const AddMark = (props)=>{
    const [name , setName] = useState('');
    const [url ,setUrl] = useState('')
    const bookmarkCtx = useContext(BookmarkContext);
    const addClickHandler = (event)=>{
        event.preventDefault()
        const id = bookmarkCtx.bookmark.length;
        bookmarkCtx.addBookmark({id:id ,name:name , url :url})
        props.onClose()
    }

    const editClickHandler = (event)=>{
        event.preventDefault()
        bookmarkCtx.editBookmark({id:props.id ,name:name , url:url})
        props.onClose()
    }

    const onNameChangeHandler = (event)=>{
        setName(event.target.value)
    }
    const onUrlChangeHandler = (event)=>{
        setUrl(event.target.value)
    }
    let button = props.id ?<Button name={'Edit'} onClick={editClickHandler}/>: <Button name={'Add'} onClick={addClickHandler}/>;

    useEffect(()=>{
        if(props.id){
            const id = props.id;
            const getBookmark = bookmarkCtx.findBookmark(id);
            console.log(getBookmark , props.id)
            const editName = getBookmark.name;
            const editUrl = getBookmark.url
            setName(editName);
            setUrl(editUrl);
        }
    },[bookmarkCtx ,props])
    
    return(
        <Modal onClose={props.onClose}>
            <form className={classes.form}>
                <h2>Enter Bookmark</h2>
                <label>Name :
                <input type="text" value={name} onChange={onNameChangeHandler}></input></label>
                <label>Url :
                <input type="text" value={url} onChange={onUrlChangeHandler}></input></label>
                {button}
                <Button name={'Close'} onClick={props.onClose}/>
            </form>
        </Modal>
    )
}

export default AddMark;