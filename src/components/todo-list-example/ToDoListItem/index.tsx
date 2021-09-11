import { useEffect, useState } from "react";
import { Col, Form, Row } from 'react-bootstrap';
import { XCircleFill } from 'react-bootstrap-icons';

type onItemChange = (item: ToDoInfo) => void;
type onItemRemove = (itemId: number) => void;

export interface ToDoInfo
{
    id: number
    text: string,
    isDone: boolean
}

const ToDoListItem = (prop: {itemInfo: ToDoInfo, OnItemChange: onItemChange, OnItemRemove: onItemRemove}) => {
    const [item, setItem] = useState({id: prop.itemInfo.id, text: prop.itemInfo.text, checked: prop.itemInfo.isDone});
    const [showClose, setShowClose] = useState(false);

    useEffect(() => {
        setItem({...item, "checked": prop.itemInfo.isDone});
    }, [prop]); // eslint-disable-line react-hooks/exhaustive-deps
    // Warning disabled above. Because I do not need 'item' in useEffect items.

    const OnTextChange = (event: any) => {
        prop.OnItemChange({id: item.id, text: event.target.value, isDone: item.checked});
        setItem({ ...item, "text": event.target.value});
    }

    const OnCheckChange = (event: any) => {
        prop.OnItemChange({id: item.id, text: item.text, isDone: !item.checked});
        setItem({ ...item, "checked": !item.checked});
    }

    const OnMouseEnter = (event: any) => {
        setShowClose(true);
    }

    const OnMouseLeave = (event: any) => {
        setShowClose(false);
    }

    const RemoveClick = (event: any) => {
        prop.OnItemRemove(item.id);
    }

    return (
        <div className={"left-margin-10 right-margin-10 " + (showClose ? "bg-aliceblue" : "")} 
            onMouseEnter={OnMouseEnter} 
            onMouseLeave={OnMouseLeave}>
            <Form.Group as={Row} className="m-2">
                <Col sm={1}>
                    <Form.Check 
                        className="mt-2"
                        name="isDone" 
                        checked={item.checked} 
                        onChange={OnCheckChange} />
                </Col>
                <Col sm={9}>
                    <Form.Control 
                        className={"no-border " + (showClose ? "bg-aliceblue" : "")}
                        value={item.text} 
                        onChange={OnTextChange} />
                </Col>
                <Col sm={2}>
                        <XCircleFill 
                            className="mt-2" 
                            color={showClose ? "black" : "white"} 
                            onClick={RemoveClick}/>
                </Col>
            </Form.Group>
        </div>
    );
}

export default ToDoListItem;