import { Dispatch, SetStateAction } from 'react'

export type AddressFormValues = {
  address: string
}

export type AddressFormProps = {
  setAddress: Dispatch<SetStateAction<AddressFormValues['address']>>
  isFetching: boolean
}
