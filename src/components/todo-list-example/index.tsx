import { useState } from "react";
import { Form } from 'react-bootstrap';
import ToDoListItem, { ToDoInfo } from './ToDoListItem';

const toDoDefaultItems: ToDoInfo[] = [
    {
        text: "Work 1",
        isDone: true
    },
    {
        text: "Work 2",
        isDone: false
    },
    {
        text: "Work 3",
        isDone: true
    }
]

const ToDoList = (prop: {cssClass: string}) => {
    const [toDoItemList, setToDoItemList] = useState(toDoDefaultItems);
    const [newItem, setNewItem] = useState("");
    
    const OnTextChange = (event: any) => {
            setNewItem(event.target.value);
    }

    const OnKeyPress = (event: any) => {
        if(event.key === "Enter") {
            setToDoItemList([...toDoItemList, { text: newItem, isDone: false}]);
            setNewItem("");
        }
    }

    return (
        <div className={"mt-5 p-2 basic-border " + prop.cssClass}>
            <h1 className="text-center">To Do List</h1>
            <hr />
            <Form.Control 
                value={newItem} 
                onKeyPress={OnKeyPress}
                onChange={OnTextChange} 
                placeholder="Enter something to add list :)" />
            {toDoItemList.map((toDoItem, index) => {
                return <ToDoListItem key={index} itemInfo={toDoItem}/>
            })}
        </div>
    );
}

export default ToDoList;