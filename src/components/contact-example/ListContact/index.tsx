import { useEffect, useState } from "react";
import { Form } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { ContactInfo } from '../';

const ListContact = (props: {contactList: ContactInfo[]}) => {
    const [filteredList, setFilteredList] = useState(props.contactList);
    const [filterValue, setFilterValue] = useState("");

    const onChangeHandle = (event: any) => {
        setFilterValue(event.target.value);
    }

    useEffect(() => {
        setFilteredList(
            props.contactList.filter((item) => {
                return (
                    item.name.toLocaleLowerCase().includes(filterValue.toLocaleLowerCase()) 
                    || item.phone.toLocaleLowerCase().includes(filterValue.toLocaleLowerCase())
                )
            })
        );
    }, [filterValue, props.contactList])

    return (
        <> 
            <Form.Control placeholder="Contact Filter" value={filterValue} onChange={onChangeHandle} />
            {filteredList.map((item, index) => 
                <Card key={index} className="m-2" border="dark" bg="light">
                    <Card.Header className="text-center">{item.name}</Card.Header>
                    <Card.Body>
                        <Card.Text className="text-center">{item.phone}</Card.Text>
                    </Card.Body>
                </Card>
            )}
        </>
    );
}

export default ListContact;