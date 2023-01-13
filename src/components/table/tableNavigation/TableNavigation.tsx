import React from 'react'
import { Link } from 'react-router-dom'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'
import SkipNextIcon from '@mui/icons-material/SkipNext'
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious'
import { stylesLink } from './TableNavigation.styles'

type Props = {
  page: {
    currentPage: number
    totalPages: number
  }
}

const TableNavigation = ({ page }: Props): JSX.Element => {
  return (
    <>
      <Link
        to={{
          search: `page=1`,
        }}
      >
        <SkipPreviousIcon sx={stylesLink} />
      </Link>
      <Link
        to={{
          search:
            page.currentPage <= 1 ? `page=1` : `page=${page.currentPage - 1}`,
        }}
      >
        <ArrowLeftIcon sx={stylesLink} />
      </Link>
      <Link
        to={{
          search:
            page.currentPage >= page.totalPages
              ? `page=${page.totalPages}`
              : `page=${page.currentPage + 1}`,
        }}
      >
        <ArrowRightIcon sx={stylesLink} />
      </Link>
      <Link
        to={{
          search: `page=${page.totalPages}`,
        }}
      >
        <SkipNextIcon sx={stylesLink} />
      </Link>
    </>
  )
}

export default TableNavigation
