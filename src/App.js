import { BrowserRouter,Route,Routes } from "react-router-dom"
import Login from './components/login/Login';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Login/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App