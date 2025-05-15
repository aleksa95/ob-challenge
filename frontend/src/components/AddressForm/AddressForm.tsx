import {
  withFormik,
  Form,
  Field,
  // FormikComputedProps,
  // FormikHelpers,
} from 'formik'
import { FormFieldInput } from '@/components/FormFieldInput'
import { addressFormValidator } from './utils/addressFormValidator'
import { AddressFormValues } from './types/AddressForm.types'

// type Props = FormikComputedProps<AddressFormValues> &
//   FormikHelpers<AddressFormValues>

export const AddressFormInner = () => {
  const fieldDisabled = false

  return (
    <Form id="AddressForm" className="bg-form-bg rounded-lg p-10">
      <Field
        name="address"
        id="address"
        component={FormFieldInput}
        placeholder="Enter your Ethereum address"
        disabled={fieldDisabled}
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
