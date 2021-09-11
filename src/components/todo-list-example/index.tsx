import { useEffect, useState } from "react";
import { Button, Col, Form, Row } from 'react-bootstrap';
import { CheckAll } from 'react-bootstrap-icons';
import ToDoListItem, { ToDoInfo } from './ToDoListItem';

var DefaulttoDoItems: ToDoInfo[] = [
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

const IsAllDone = (itemList: ToDoInfo[]): boolean => {
    const resultList = GetDoneItemsWithDoneProp(itemList, true);
    return (resultList.length > 0 && resultList.length === itemList.length);
}

const GetDoneItemsWithDoneProp = (itemList: ToDoInfo[], shouldDone: boolean): ToDoInfo[] => {
    return itemList.filter((item) => {
        if(item.isDone === shouldDone) {
            return true;
        }
        return false;
    });
}

const ToDoList = (prop: {cssClass: string}) => {
    const [allItems, setAllItems] = useState(DefaulttoDoItems.slice());
    const [toDoItemList, setToDoItemList] = useState(DefaulttoDoItems);
    const [allSelected, setAllSelected] = useState(IsAllDone(DefaulttoDoItems));
    const [newItem, setNewItem] = useState("");
    const [notDoneItemCount, setNotDoneItemCount] = useState(2); // GetNotDoneItems(toDoDefaultItems).length);
    const [anyDone, setAnyDone] = useState(true); //GetDoneItems(toDoDefaultItems).length > 0);
    const [listType, setListType] = useState("All");

    useEffect(() => {
        if(listType === "All") {
            setToDoItemList(allItems);
        }
        else if(listType === "Active") {
            setToDoItemList(GetDoneItemsWithDoneProp(allItems, false));
        }
        else if(listType === "Complited") {
            setToDoItemList(GetDoneItemsWithDoneProp(allItems, true));
        }
    }, [allItems, listType]);

    useEffect(() => {
        setAllSelected(IsAllDone(toDoItemList));
        setNotDoneItemCount(GetDoneItemsWithDoneProp(toDoItemList, false).length);
        setAnyDone(GetDoneItemsWithDoneProp(toDoItemList, true).length > 0);
    }, [toDoItemList, listType]);

    const OnTextChange = (event: any) => {
        setNewItem(event.target.value);
    }

    const OnKeyPress = (event: any) => {
        if(event.key === "Enter") {
            var tmpId: number = 0;
            if(allItems.length > 0) {
                tmpId = allItems[allItems.length - 1].id + 1;
            }
            setListType("All");
            setAllItems([...allItems, {id: tmpId, text: newItem, isDone: false}]);
            setNewItem("");
        }
    }

    const OnAllClick = () => {
        setAllItems(
            allItems.map((item) => {
                const isInScreen = toDoItemList.some((innerItem) => {
                    if(item.id === innerItem.id) {
                        return true;
                    }
                    return false;
                });
                if(isInScreen && !allSelected && !item.isDone) {
                    item.isDone = true;
                }
                else if(isInScreen && allSelected && item.isDone) {
                    item.isDone = false;
                }
                return item;
            })
        );
    }

    const OnItemChange = (changedItem: ToDoInfo) => {
        setAllItems(
            allItems.map((item) => {
                if (item.id === changedItem.id) {
                    item.text = changedItem.text;
                    item.isDone = changedItem.isDone;
                }
                return item;
            })
        );
    }

    const OnItemRemove = (itemId: number) => {
        setAllItems(
            allItems.filter((item) => {
                if (item.id === itemId) {
                    return false;
                }
                return true;
            })
        );
    }

    const OnListSelectionChange = (event: any) => {
        setListType(event.target.innerText);
    }

    const OnRemoveCompleted = () => {
        const removeList = toDoItemList.filter((item) => {
            if(item.isDone) {
                return true;
            }
            return false;
        });
        setAllItems(
            allItems.filter((item) => {
                return !removeList.some((innerItem) => {
                    if(item.id === innerItem.id) {
                        return true;
                    }
                    return false;
                });
            })
        );
    }

    return (
        <div className={"mt-5 p-2 basic-border " + prop.cssClass}>
            <h1 className="text-center">To Do List</h1>
            <hr />
            <Form.Group as={Row} className="m-1">
                <Col sm={2}>
                    <Button 
                        variant={allSelected ? "secondary" : "outline-secondary"} 
                        onClick={OnAllClick}>
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
                return <ToDoListItem 
                            key={toDoItem.id} 
                            itemInfo={toDoItem} 
                            OnItemChange={OnItemChange} 
                            OnItemRemove={OnItemRemove}/>
            })}
            <hr />
            <Form.Group as={Row} className="m-1 font-size-11px">
                <Col sm={3}>
                    <div>{notDoneItemCount} item left</div>
                </Col>
                <Col sm={5}>
                    <span className={"cursor-pointer " + (listType === "All" ? "text-underline": "")}
                        onClick={OnListSelectionChange}>All</span> 
                    <span> | </span> 
                    <span className={"cursor-pointer " + (listType === "Active" ? "text-underline": "")}
                        onClick={OnListSelectionChange}>Active</span>
                    <span> | </span> 
                    <span className={"cursor-pointer " + (listType === "Complited" ? "text-underline": "")}
                        onClick={OnListSelectionChange}>Complited</span>
                </Col>
                <Col sm={4}>
                    {anyDone && <div className="cursor-pointer" onClick={OnRemoveCompleted}>Clear Completed</div>}
                </Col>
            </Form.Group>
        </div>
    );
}

export default ToDoList;