import React from "react";

const CartContext  = React.createContext({
        bookmark:[],
        addBookmark:(item)=>{},
        removeBookmark:(id)=>{},
        editBookmark:(item)=>{},
        findBookmark:(id)=>{}
    });

export default CartContext;