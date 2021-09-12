import { useState } from "react";
import AddContact from './AddContact';
import ContactList from './ListContact';

export interface ContactInfo
{
    name: string,
    phone: string
}

const contactDefaultList: ContactInfo[] = [
    {
        name: "User-1",
        phone: "0 000 000 00 00"
    },
    {
        name: "User-2",
        phone: "0 111 111 11 11"
    },
    {
        name: "User-3",
        phone: "0 222 222 22 22"
    }
];

const Contact = () => {
    
    const [contactList, setContactList] = useState(contactDefaultList)

    const onContactAddHandle=  (contact: ContactInfo) => {
        setContactList([...contactList, contact]);
    }

    return (
        <div>
            <h1 className="mt-5 text-center">Contact List</h1>
            <hr />
            <ContactList contactList={contactList} />
            <hr />
            <AddContact OnContactAdd={onContactAddHandle}/>
        </div>
    );
}

export default Contact;