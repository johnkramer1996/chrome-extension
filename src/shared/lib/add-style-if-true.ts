import { SxProps } from '@mui/material'

export const addStyleIfTrue = (condition: boolean, props: SxProps) => (condition ? props : {})
