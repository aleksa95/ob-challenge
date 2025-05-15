import { isAddress } from 'viem'
import { AddressFormValues } from '../types/AddressForm.types'

export const addressFormValidator = (values: AddressFormValues) => {
  const errors: {
    address?: string
  } = {}

  if (!values.address) errors.address = 'Required'
  if (values.address && !isAddress(values.address)) {
    errors.address = 'Invalid address format'
  }

  return errors
}
