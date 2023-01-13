import './App.css'
import Form from './components/form/Form'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <div className="App">
        <Form />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
