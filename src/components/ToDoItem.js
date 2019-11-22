import React from 'react'
import '../App.css';

export default function ToDoItem(props) {
    
    return (
        <div className="ToDoItem" onClick={props.deleteItem}>
         {props.text}
        </div>
    )
}
