import { ThemeProvider } from '../../context/ThemeContext'
import ContextTestButton from './ContexTestButton'
import ContextTestHeader from './ContextTestHeader'

const ContextTest = () => {
    return (
        <ThemeProvider>
            <div>
                <br />
                <br />
                <ContextTestHeader />
                <hr />
                <br />
                <ContextTestButton />
            </div>
        </ThemeProvider>
    )
}

export default ContextTest
