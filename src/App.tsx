import { CircularProgress } from '@mui/material'
import './App.css'
import Form from './components/form/Form'
import Table from './components/table/Table'
import { Data } from './components/table/Table.types'
import useFetch from './hooks/useFetch'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

type Response = {
  page: number
  per_page: number
  total: number
  total_pages: number
  data: Data[]
  support: {
    url: string
    text: string
  }
}

function App(): JSX.Element {
  const url = 'https://reqres.in/api/products?per_page=5'
  const { response, error, loading } = useFetch<Response>(url)
  console.log('error', error)
  console.log('loading', loading)

  return (
    <BrowserRouter>
      <div className="App">
        <Form />
        <Routes>
          <Route
            path="/"
            element={
              response ? (
                <Table products={response.data} />
              ) : (
                <CircularProgress />
              )
            }
          />
          <Route
            path="/"
            element={
              response ? (
                <Table products={response.data} />
              ) : (
                <CircularProgress />
              )
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
