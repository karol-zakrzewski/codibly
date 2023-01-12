import { TableCell, TableRow } from '@mui/material'

type Props = {
  headings: string[]
}

const TableHeading = ({ headings }: Props): JSX.Element => {
  return (
    <TableRow>
      {headings.map((heading, index) => (
        <TableCell key={`${index}-${heading}`}>{heading}</TableCell>
      ))}
    </TableRow>
  )
}

export default TableHeading
