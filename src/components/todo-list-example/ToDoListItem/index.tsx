import { useEffect, useState } from "react";
import { Col, Form, Row } from 'react-bootstrap';

type onItemChange = (item: ToDoInfo) => void;

export interface ToDoInfo
{
    id: number
    text: string,
    isDone: boolean
}

const ToDoListItem = (prop: {itemInfo: ToDoInfo, OnItemChange: onItemChange}) => {
    const [item, setItem] = useState(prop.itemInfo);

    useEffect(() => {
        setItem(prop.itemInfo);
    }, [prop.itemInfo]);

    useEffect(() => {
        prop.OnItemChange(item);
    }, [item]); // eslint-disable-line react-hooks/exhaustive-deps
    // Warning disabled above. Because I do not need 'prop.OnItemChange' in useEffect items.

    const OnTextChange = (event: any) => {
        setItem({ ...item, "text": event.target.value});
    }

    const OnCheckChange = (event: any) => {
        setItem({ ...item, "isDone": !item.isDone});
    }

    return (
        <div className="left-margin-2">
            <Form.Group as={Row} className="m-2" >
                <Col sm={1}>
                    <Form.Check className="mt-2" name="isDone" checked={item.isDone} onChange={OnCheckChange} />
                </Col>
                <Col sm={11}>
                    <Form.Control className="no-border" value={item.text} onChange={OnTextChange} />
                </Col>
            </Form.Group>
        </div>
    );
}

export default ToDoListItem;