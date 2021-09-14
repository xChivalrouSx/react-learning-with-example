import Button from '@restart/ui/esm/Button';
import { useState } from 'react';
import SignUpHeader from './Header';
import SignUp from './SignUp';


const SignUpForm = () => {
    const [number, setNumber] = useState(0);

    return (
        <div>
            <br />
            <hr />
            
            <h2>{number}</h2>

            <div>
            <Button onClick={() => {setNumber(number + 1)}}>Click me...</Button>
            </div>

            <hr />

            <SignUpHeader />
            
            <hr />
            
            <SignUp />
        </div>
    )
}

export default SignUpForm
