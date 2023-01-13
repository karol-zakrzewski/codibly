import Table from '../components/table/Table'
import { Response } from '../components/table/Table.types'
import useFetch from '../hooks/useFetch'
import { Link, useSearchParams } from 'react-router-dom'
import TableRow from '../components/table/tableRow/TableRow'
import { paths } from '../utils/paths'
import NotFound from '../components/notFound/NotFound'
import { CircularProgress } from '@mui/material'

const Home = (): JSX.Element => {
  const [searchParams] = useSearchParams()
  const pageSearchParam = searchParams.get('page')
  const pageCount = pageSearchParam ? pageSearchParam : '1'
  const url = `${paths.fetchUrl}?per_page=5&page=${pageCount}`
  const { response, error, loading } = useFetch<Response>(url)

  return (
    <>
      {loading && <CircularProgress />}
      {error && <NotFound />}
      {response && (
        <>
          <Table>
            <>
              {response.data.map((row) => (
                <TableRow key={row.id} {...row} />
              ))}
            </>
          </Table>
          <Link
            to={{
              search:
                response.page <= 1 ? `page=1` : `page=${response.page - 1}`,
            }}
          >
            Prev page
          </Link>
          <Link
            to={{
              search:
                response.page >= response.total_pages
                  ? `page=${response.total_pages}`
                  : `page=${response.page + 1}`,
            }}
          >
            Next page
          </Link>
        </>
      )}
    </>
  )
}

export default Home
