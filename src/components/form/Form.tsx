import { Box, Button } from '@mui/material'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { paths } from '../../utils/paths'
import { Inputs } from './Form.types'
import TextInput from './input/TextInput'

const Form = (): JSX.Element => {
  const navigate = useNavigate()
  const {
    reset,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      value: '',
    },
  })
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data)
    navigate(`/${data.value}`)
    reset()
  }

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextInput name="value" errors={errors} control={control} />
      <Button type="submit" variant="contained">
        Search
      </Button>
      <Link to={paths.home}>Reset filter</Link>
    </Box>
  )
}

export default Form
