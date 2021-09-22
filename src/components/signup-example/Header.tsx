import Button from '@restart/ui/esm/Button';
import React from 'react';

export interface PropExample {
    name: string;
}

const Header = (props: {example: PropExample, clickMe: () => void}) => { 
    
    console.log("Re-render : " + props.example.name);
    
    return (
        <>
            <Button onClick={props.clickMe}>Inner Click me...</Button>

            <hr />

            <h1>Sign Up</h1> 
        </>
    );
}

export default React.memo(Header);
