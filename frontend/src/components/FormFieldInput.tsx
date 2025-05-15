import { useCallback, ChangeEvent, useMemo } from 'react'
import { ErrorMessage, FieldInputProps, FormikProps } from 'formik'

type Props<FormValues> = {
  id: string
  disabled: boolean
  placeholder: string
  type: string
  field: FieldInputProps<string>
  form: FormikProps<FormValues>
  showErrorText?: boolean
  onAfterChange: (p: string) => void
}

export const FormFieldInput = <FormValues,>({
  id,
  field,
  placeholder,
  type,
  form,
  disabled = false,
  onAfterChange = () => {},
}: Props<FormValues>) => {
  const { errors, touched } = form

  const isTouched = touched[field.name as keyof typeof form.values]
  const hasError = !!(isTouched
    ? errors[field.name as keyof typeof form.values]
    : '')

  const handleOnChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const onChangeAsync = async () => {
        await form.setFieldValue(field.name, e.target.value)
        onAfterChange(e.target.value)
      }

      onChangeAsync().catch(console.error)
    },
    [field, onAfterChange, form]
  )

  const inputClassNames = useMemo(() => {
    if (hasError) {
      return 'border-input-border-error hover:border-input-border-error-hover focus:border-input-border-error-hover'
    }

    if (disabled) {
      return 'cursor-not-allowed text-input-disabled-text'
    }

    return 'border-input-border hover:border-input-border-hover focus:border-input-border-hover'
  }, [hasError, disabled])

  return (
    <div className="flex flex-col gap-1.5">
      <input
        {...field}
        className={`bg-input-bg placeholder-input-placeholder font-text rounded-lg border-1 p-4 text-base text-white transition duration-300 ease-in-out outline-none ${inputClassNames}`}
        onChange={handleOnChange}
        id={id}
        placeholder={placeholder}
        type={type}
        disabled={disabled}
        autoFocus
      />

      <ErrorMessage
        name={field.name}
        render={(err) => (
          <div className="text-input-error-text font-text text-sm">{err}</div>
        )}
      />
    </div>
  )
}
