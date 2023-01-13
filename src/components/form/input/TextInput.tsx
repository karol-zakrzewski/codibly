import { TextField } from '@mui/material'
import { Control, Controller, FieldErrorsImpl } from 'react-hook-form'
import { Inputs } from '../Form.types'

type Props = {
  control: Control<Inputs, unknown>
  errors: Partial<FieldErrorsImpl<Inputs>>
  name: keyof Inputs
}

const TextInput = ({ control, errors, name }: Props): JSX.Element => {
  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: {
          value: true,
          message: 'Required',
        },
      }}
      render={({ field }) => (
        <TextField
          error={Boolean(errors[name])}
          helperText={errors && errors[name]?.message}
          label="Search product"
          variant="outlined"
          type="number"
          {...field}
        />
      )}
    />
  )
}

export default TextInput
