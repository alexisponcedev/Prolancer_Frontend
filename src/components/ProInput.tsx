import {
  InputLabel,
  OutlinedInput,
  OutlinedInputProps,
  Stack,
} from '@mui/material'
import { ReactNode, forwardRef } from 'react'

type ProInputProps = {
  helperText?: ReactNode
} & OutlinedInputProps

const ProInput = forwardRef<unknown, ProInputProps>(
  ({ label, required, helperText, sx, ...inputProps }, ref) => {
    return (
      <Stack marginY={0.5} sx={sx}>
        <InputLabel sx={{ my: 0.5 }}>
          {label} {required && <span style={{ color: 'red' }}>*</span>}
        </InputLabel>
        <OutlinedInput size="small" {...inputProps} ref={ref} />
        {inputProps.error ? helperText : null}
      </Stack>
    )
  }
)

export default ProInput