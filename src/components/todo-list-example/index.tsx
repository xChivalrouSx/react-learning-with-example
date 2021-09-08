import { useEffect, useState } from "react";
import { Button, Col, Form, Row } from 'react-bootstrap';
import { CheckAll } from 'react-bootstrap-icons';
import ToDoListItem, { ToDoInfo } from './ToDoListItem';

const toDoDefaultItems: ToDoInfo[] = [
    {
        id: 1,
        text: "Work 1",
        isDone: true
    },
    {
        id: 2,
        text: "Work 2",
        isDone: false
    },
    {
        id: 3,
        text: "Work 3",
        isDone: true
    }
]

const ToDoList = (prop: {cssClass: string}) => {
    const [toDoItemList, setToDoItemList] = useState(toDoDefaultItems);
    const [allSelected, setAllSelected] = useState(false);
    const [newItem, setNewItem] = useState("");
    
    useEffect(() => {
        CheckAndSetAllSelected();
    }, [toDoItemList]); // eslint-disable-line react-hooks/exhaustive-deps
    // Warning disabled above. Because I do not need 'allSelected' in useEffect items.
    
    const CheckAndSetAllSelected = () => {
        if(isAllDone() && !allSelected) {
            setAllSelected(true);
        }
        else if(!isAllNotDone() && allSelected) {
            setAllSelected(false);
        }
    }

    const OnTextChange = (event: any) => {
        setNewItem(event.target.value);
    }

    const OnKeyPress = (event: any) => {
        if(event.key === "Enter") {
            var tmpId: number = 0;
            if(toDoItemList.length > 0) {
                tmpId = toDoItemList[toDoItemList.length - 1].id + 1;
            }
            setToDoItemList([...toDoItemList, {id: tmpId, text: newItem, isDone: false}]);
            setNewItem("");
        }
    }

    const OnAllClick = (event: any) => {
        setToDoItemList(
            toDoItemList.map((item) => {
                return {...item, isDone: !allSelected};
            })
        );
        setAllSelected(!allSelected);
    }

    const isAllDone = (): boolean => {
        return toDoItemList.every((item) => { return item.isDone });
    }

    const isAllNotDone = (): boolean => {
        return toDoItemList.every((item) => { return !item.isDone });
    }

    const IsItemChange = (item: ToDoInfo) => {
        toDoItemList.forEach((x) => {
            if(x.id === item.id) {
                x.isDone = item.isDone;
                x.text = item.text;
            }
        });
        CheckAndSetAllSelected();
    }

    return (
        <div className={"mt-5 p-2 basic-border " + prop.cssClass}>
            <h1 className="text-center">To Do List</h1>
            <hr />
            <Form.Group as={Row} className="m-1">
                <Col sm={2}>
                    <Button variant={allSelected ? "secondary" : "outline-secondary"} onClick={OnAllClick}>
                            <CheckAll size={20}/>
                    </Button>
                </Col>
                <Col sm={10}>
                    <Form.Control 
                        value={newItem} 
                        onKeyPress={OnKeyPress}
                        onChange={OnTextChange} 
                        placeholder="Enter something to add list :)" />
                </Col>
            </Form.Group>
            {toDoItemList.map((toDoItem) => {
                return <ToDoListItem key={toDoItem.id} itemInfo={toDoItem} OnItemChange={IsItemChange}/>
            })}
        </div>
    );
}

export default ToDoList;