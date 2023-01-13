import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import FilteredProductTable from './pages/FilteredProductTable'
import Form from './components/form/Form'
import NotFound from './components/notFound/NotFound'

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <div className="App">
        <Form />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path=":id" element={<FilteredProductTable />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
