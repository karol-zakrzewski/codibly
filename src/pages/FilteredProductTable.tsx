import { CircularProgress } from '@mui/material'
import { useParams } from 'react-router-dom'
import NotFound from '../components/notFound/NotFound'
import Table from '../components/table/Table'
import { Data } from '../components/table/Table.types'
import TableRow from '../components/table/tableRow/TableRow'
import useFetch from '../hooks/useFetch'
import { paths } from '../utils/paths'

type DataApi = {
  data: Data
}

const FilteredProductTable = (): JSX.Element => {
  const { id } = useParams()
  const url = `${paths.baseUrl}/${id}`
  const { response, error, loading } = useFetch<DataApi>(url)

  return (
    <div>
      {loading && <CircularProgress />}
      {error && <NotFound />}
      {response && (
        <Table>
          <>
            <TableRow {...response.data} />
          </>
        </Table>
      )}
    </div>
  )
}

export default FilteredProductTable
