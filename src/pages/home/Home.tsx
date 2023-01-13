import Table from '../../components/table/Table'
import { Response } from '../../components/table/Table.types'
import useFetch from '../../hooks/useFetch'
import { useSearchParams } from 'react-router-dom'
import TableRow from '../../components/table/tableRow/TableRow'
import { paths } from '../../utils/paths'
import Error from '../../components/error/Error'
import { CircularProgress } from '@mui/material'
import TableNavigation from '../../components/table/tableNavigation/TableNavigation'

const Home = (): JSX.Element => {
  const [searchParams] = useSearchParams()
  const pageSearchParam = searchParams.get('page')
  const pageCount = pageSearchParam ? pageSearchParam : '1'
  const url = `${paths.fetchUrl}?per_page=5&page=${pageCount}`
  const { response, error, loading } = useFetch<Response>(url)

  return (
    <>
      {loading && <CircularProgress />}
      {error && <Error error={error.message} />}
      {response && (
        <>
          <Table>
            <>
              {response.data.map((row) => (
                <TableRow key={row.id} {...row} />
              ))}
            </>
          </Table>
          <TableNavigation
            page={{
              currentPage: response.page,
              totalPages: response.total_pages,
            }}
          />
        </>
      )}
    </>
  )
}

export default Home
