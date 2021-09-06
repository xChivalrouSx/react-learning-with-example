import { useState } from "react";
import { Col, Form, Row } from 'react-bootstrap';

export interface ToDoInfo
{
    text: string,
    isDone: boolean
}


const ToDoListItem = (prop: {itemInfo: ToDoInfo}) => {
    const [item, setItem] = useState(prop.itemInfo);

    const OnTextChange = (event: any) => {
        setItem({ ...item, "text": event.target.value});
    }

    const OnCheckChange = (event: any) => {
        setItem({ ...item, "isDone": !item.isDone});
    }

    return (
        <div>
            <Form.Group as={Row} className="m-2">
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