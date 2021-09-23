import { useContext } from 'react';
import ThemeContext from '../../context/ThemeContext';

const ContexTestButton = () => {
    const {theme, setTheme} = useContext(ThemeContext);

    return (
        <div>
            <button onClick={() => {setTheme(theme === "Light" ? "Dark" : "Light")}}>Change Theme</button>
            <br />
            <br />
            <div>Button Theme ({theme})</div>
        </div>
    )
}

export default ContexTestButton;