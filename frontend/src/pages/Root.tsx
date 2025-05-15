import logo from '@/assets/logo.png'

export const Root = () => (
  <div className="flex flex-1 grow items-start p-10 justify-center max-sm:items-start">
    <div className="flex gap-5 items-center">
      <img src={logo} alt="logo" className="w-[82px] h-[82px]" />
      <div className="font-title text-3xl font-bold text-white max-w-[151px]">
        {import.meta.env.VITE_APP_NAME}
      </div>
    </div>
  </div>
)
