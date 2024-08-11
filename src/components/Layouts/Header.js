import React from "react";
import classes from './Header.module.css';

import Button from "./Button";

const Header = (props)=>{
    return (
        <div className={classes.div}>
            <header>
                <h1>Bookmark Website</h1>
            </header>
            <div>
                <Button name={'add'} type={'button'} onClick={props.onAdd}/>
            </div>
        </div>
    )
}

export default Header;