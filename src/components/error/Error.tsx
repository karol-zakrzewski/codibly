import { Box, Typography } from '@mui/material'

type Props = {
  error: string
}

const NotFound = ({ error }: Props): JSX.Element => {
  return (
    <Box>
      <Typography>{error}</Typography>
    </Box>
  )
}

export default NotFound
