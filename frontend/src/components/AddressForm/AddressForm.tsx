import {
  withFormik,
  Form,
  Field,
  FormikComputedProps,
  FormikHelpers,
  FormikState,
} from 'formik'
import { FormFieldInput } from '@/components/FormFieldInput'
import { useGetTokenBalancesQuery } from '@/apis/general.api'
import { addressFormValidator } from './utils/addressFormValidator'
import { AddressFormValues } from './types/AddressForm.types'

type Props = FormikComputedProps<AddressFormValues> &
  FormikHelpers<AddressFormValues> &
  FormikState<AddressFormValues>

export const AddressFormInner = ({ isValid, values }: Props) => {
  const { isFetching } = useGetTokenBalancesQuery(values.address, {
    skip: !isValid || !values.address,
  })

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

export const AddressForm = withFormik<object, AddressFormValues>({
  mapPropsToValues: () => ({
    address: '',
  }),
  validate: addressFormValidator,
  handleSubmit: () => {},
})(AddressFormInner)
