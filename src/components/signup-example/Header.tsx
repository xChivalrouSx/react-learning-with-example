import React from 'react';

const Header = () => { 
    
    console.log("Re-render");
    
    return (
        <h1>Sign Up</h1> 
    );
}

export default React.memo(Header);
