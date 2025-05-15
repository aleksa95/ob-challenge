import {
  withFormik,
  Form,
  Field,
  FormikComputedProps,
  FormikHelpers,
  FormikState,
} from 'formik'
import { useEffect } from 'react'
import { FormFieldInput } from '@/components/FormFieldInput'
import { addressFormValidator } from './utils/addressFormValidator'
import { AddressFormValues, AddressFormProps } from './types/AddressForm.types'
import { useInvalidateTokenBalancesMutation } from '../../apis/general.api'

type Props = FormikComputedProps<AddressFormValues> &
  FormikHelpers<AddressFormValues> &
  FormikState<AddressFormValues> &
  AddressFormProps

export const AddressFormInner = ({
  isValid,
  isValidating,
  values,
  setAddress,
  isFetching,
}: Props) => {
  const [invalidate] = useInvalidateTokenBalancesMutation()

  useEffect(() => {
    if (isValid && !isValidating && values.address) {
      setAddress(values.address)
    } else {
      setAddress('')
      invalidate(undefined).catch(console.error)
    }
  }, [isValid, invalidate, isValidating, values.address, setAddress])

  return (
    <Form id="AddressForm" className="bg-form-bg rounded-lg p-10">
      <Field
        name="address"
        id="address"
        component={FormFieldInput}
        placeholder="Enter your Ethereum address"
        disabled={isFetching}
      />
    </Form>
  )
}

export const AddressForm = withFormik<AddressFormProps, AddressFormValues>({
  mapPropsToValues: () => ({
    address: '',
  }),
  validate: addressFormValidator,
  handleSubmit: () => {},
})(AddressFormInner)
