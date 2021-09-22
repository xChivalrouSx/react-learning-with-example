import React from 'react';

export interface PropExample {
    name: string;
}

const Header = (props: {example: PropExample}) => { 
    
    console.log("Re-render : " + props.example.name);
    
    return (
        <h1>Sign Up</h1> 
    );
}

export default React.memo(Header);
