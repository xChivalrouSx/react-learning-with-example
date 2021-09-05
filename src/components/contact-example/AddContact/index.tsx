import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { ContactInfo } from "..";

type onContactAddHandle = (newContact: ContactInfo) => void;

const emptyFormValues = {
    name: "", 
    phone: ""
}

const AddContact = (props: {OnContactAdd: onContactAddHandle}) => {
    const [formValue, setFormValue] = useState(emptyFormValues);

    const onChangeHandle = (event: any) => {
        setFormValue({...formValue, [event.target.name]: event.target.value});
    }

    const onAddClick = () => {
        props.OnContactAdd(formValue);
        setFormValue(emptyFormValues);
    }

    return (
        <>
            <Form.Control 
                className="mt-2 mb-2"
                placeholder="Cantact Name" 
                name="name" 
                value={formValue.name} 
                onChange={onChangeHandle} />
            <Form.Control 
                className="mt-2 mb-2"
                placeholder="Phone Number" 
                name="phone" 
                value={formValue.phone} 
                onChange={onChangeHandle} />
            <Button className="w-100" onClick={onAddClick}>Add</Button> 
        </>
    );
}

export default AddContact;