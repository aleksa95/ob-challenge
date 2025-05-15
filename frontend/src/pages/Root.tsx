import logo from '@/assets/logo.png'
import { AddressForm } from '@/components/AddressForm/AddressForm'

export const Root = () => (
  <div className="flex flex-1 grow items-start justify-center p-10 max-sm:items-start">
    <div className="flex max-w-[550px] flex-1 grow flex-col gap-10">
      <div className="flex items-center gap-5 self-center">
        <img src={logo} alt="logo" className="h-[82px] w-[82px]" />
        <div className="font-title max-w-[151px] text-3xl font-bold text-white">
          {import.meta.env.VITE_APP_NAME}
        </div>
      </div>

      <AddressForm />
    </div>
  </div>
)
