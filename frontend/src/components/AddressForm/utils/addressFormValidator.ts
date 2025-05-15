import { AddressFormValues } from '../types/AddressForm.types'

export const addressFormValidator = (
  values: AddressFormValues
) => {
  const errors: {
    address?: string
  } = {}

  if (!values.address) errors.address = 'Required'

  return errors
}
