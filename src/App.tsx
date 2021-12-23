import { useGlobalContext } from './Context'

import SetupForm from './SetupForm'
import Loading from './Loading'
import Modal from './Modal'

function App() {
    const { status } = useGlobalContext()

    if (status === 'setUpQues') return <SetupForm />
    if (status === 'getQues') return <Loading />

    return <main>quiz app</main>
}

export default App
