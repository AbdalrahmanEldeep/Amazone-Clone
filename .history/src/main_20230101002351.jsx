import ReactDOM from 'react-dom/client'
import { GlobalProvider } from './context/GlobalContext'
import { Root} from './router/routes'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <GlobalProvider>
       <Root/>
    </GlobalProvider>
)
