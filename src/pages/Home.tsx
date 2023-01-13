import Table from '../components/table/Table'
import { Data } from '../components/table/Table.types'
import useFetch from '../hooks/useFetch'
import { useSearchParams } from 'react-router-dom'

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

const Home = (): JSX.Element => {
  const [searchParams] = useSearchParams()
  const pageSearchParam = searchParams.get('page')
  const pageCount = pageSearchParam ? pageSearchParam : '1'

  const url = `https://reqres.in/api/products?per_page=5&page=${pageCount}`
  const { response } = useFetch<Response>(url)
  console.log(response)

  return (
    <>
      {response && (
        <Table
          products={response.data}
          page={{
            currentPage: response.page,
            totalPages: response.total_pages,
          }}
        />
      )}
    </>
  )
}

export default Home
