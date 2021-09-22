import Button from '@restart/ui/esm/Button';
import { useCallback, useMemo, useState } from 'react';
import SignUpHeader from './Header';
import SignUp from './SignUp';


const SignUpForm = () => {
    const [number, setNumber] = useState(0);

    const propValue = useMemo(() => {
        return { name: "test-name"};
    }, []);

    const clickMeEvent: () => void = useCallback(() => {
        setNumber((prevState) => prevState + 1);
    }, []);

    return (
        <div>
            <br />
            <hr />
            
            <h2>{number}</h2>

            <div>
            <Button onClick={() => {setNumber(number + 1)}}>Click me...</Button>
            </div>

            <hr />

            <SignUpHeader example={propValue} clickMe={clickMeEvent}/>
            
            <hr />
            
            <SignUp />
        </div>
    )
}

export default SignUpForm
